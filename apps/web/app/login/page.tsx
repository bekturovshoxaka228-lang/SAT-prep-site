"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "@/lib/api";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import {
  BookOpen,
  CheckCircle,
  GraduationCap,
  Lock,
  Mail,
  User,
  AlertCircle,
  Loader2,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isRegister, setIsRegister] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [password, setPassword] = useState("");

  // Error states
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    username?: string;
    password?: string;
    login?: string;
  }>({});

  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const mode = searchParams.get("mode");
    if (mode === "register") {
      setIsRegister(true);
    } else {
      setIsRegister(false);
    }
  }, [searchParams]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const toggleMode = (targetRegister: boolean) => {
    setIsRegister(targetRegister);
    setGeneralError(null);
    setFieldErrors({});
    const newUrl = targetRegister ? "/login?mode=register" : "/login";
    window.history.replaceState(null, "", newUrl);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setGeneralError(null);
    setFieldErrors({});

    // Client validation
    const errors: typeof fieldErrors = {};
    if (isRegister) {
      if (!email.trim() || !email.includes("@")) {
        errors.email = "Please enter a valid email address";
      }
      if (!username.trim() || username.length < 3) {
        errors.username = "Username must be at least 3 characters";
      } else if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        errors.username = "Only letters, numbers, and underscores allowed";
      }
      if (!password || password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }
    } else {
      if (!loginIdentifier.trim()) {
        errors.login = "Please enter your email or username";
      }
      if (!password) {
        errors.password = "Please enter your password";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      if (isRegister) {
        const res = await api.auth.register(
          { email: email.trim(), username: username.trim(), password },
          controller.signal
        );

        if (res.ok && res.data) {
          await router.push("/onboarding/ielts");
        } else {
          setIsSubmitting(false);
          if (res.status === 409 && res.error) {
            if (res.error.field === "email") {
              setFieldErrors({ email: res.error.message || "This email is already registered" });
            } else if (res.error.field === "username") {
              setFieldErrors({ username: res.error.message || "This username is already taken" });
            } else {
              setGeneralError(res.error.message || "Account already exists");
            }
          } else if (res.status === 422 && res.error?.details) {
            const serverErrors: typeof fieldErrors = {};
            for (const d of res.error.details) {
              const f = d.loc[d.loc.length - 1];
              if (f === "email" || f === "username" || f === "password") {
                serverErrors[f as keyof typeof fieldErrors] = d.msg;
              }
            }
            setFieldErrors(serverErrors);
          } else {
            setGeneralError(res.error?.message || "An unexpected error occurred. Please try again.");
          }
        }
      } else {
        const res = await api.auth.login(
          { login: loginIdentifier.trim(), password },
          controller.signal
        );

        if (res.ok && res.data) {
          if (res.data.onboarding_completed) {
            await router.push("/dashboard");
          } else if (res.data.onboarding_step === "sat") {
            await router.push("/onboarding/sat");
          } else {
            await router.push("/onboarding/ielts");
          }
        } else {
          setIsSubmitting(false);
          if (res.status === 401) {
            setGeneralError("Invalid email/username or password.");
          } else {
            setGeneralError(res.error?.message || "Login failed. Please try again.");
          }
        }
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setIsSubmitting(false);
        setGeneralError("Connection error. Please check your network.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navbar */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-slate-200/70 dark:border-white/[0.07] bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md">
        <Logo size="md" href="/login" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content Showcase & Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Platform Features & References Highlight */}
          <div className="lg:col-span-6 hidden lg:flex flex-col space-y-6 pr-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/40 text-[#007EA7] dark:text-[#00A8E8] text-xs font-medium w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#00A8E8]" strokeWidth={1.75} />
              Единый стандарт подготовки к экзаменам
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
              IELTS Academic и Digital SAT на одной удобной платформе.
            </h1>

            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Интерфейс в точности повторяет официальные форматы тестирования IELTS и College Board Digital SAT, объединенные с умными интервальными карточками SM-2.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-xs">
                <div className="flex items-center gap-2 text-[#007EA7] dark:text-[#00A8E8] font-semibold text-sm mb-1">
                  <BookOpen className="w-4 h-4" strokeWidth={1.75} /> IELTS Academic
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  Таймеры, аудиотреки и критерии оценивания до Band 9.0.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] shadow-xs">
                <div className="flex items-center gap-2 text-[#007EA7] dark:text-[#00A8E8] font-semibold text-sm mb-1">
                  <GraduationCap className="w-4 h-4" strokeWidth={1.75} /> Digital SAT
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  Модули 1 и 2, встроенный калькулятор Desmos и Grid-In задачи.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" strokeWidth={1.75} /> Официальные таймеры
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#007EA7] dark:text-[#00A8E8]" strokeWidth={1.75} /> Карточки SM-2
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" strokeWidth={1.75} /> Разбор ошибок
              </span>
            </div>
          </div>

          {/* Right Column: Card Form */}
          <div className="lg:col-span-6 w-full max-w-md mx-auto">
            <div className="bg-white dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/[0.07] p-8 rounded-3xl shadow-xs transition-all">
              {/* Header with badges */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40">
                    <BookOpen className="w-3.5 h-3.5" strokeWidth={1.75} /> IELTS
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-50 dark:bg-sky-950/40 text-[#007EA7] dark:text-[#00A8E8] border border-sky-200/60 dark:border-sky-800/40">
                    <GraduationCap className="w-3.5 h-3.5" strokeWidth={1.75} /> Digital SAT
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">
                  {isRegister ? "Создать аккаунт" : "Вход в аккаунт"}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-1 font-normal">
                  {isRegister
                    ? "Начните подготовку по персональному плану"
                    : "Войдите для доступа к симуляторам и личной статистике"}
                </p>
              </div>

              {/* Mode Toggle Tabs */}
              <div className="grid grid-cols-2 bg-slate-100/80 dark:bg-white/[0.05] p-1 rounded-full mb-6 border border-slate-200/60 dark:border-white/[0.06]">
                <button
                  type="button"
                  onClick={() => toggleMode(false)}
                  className={`py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                    !isRegister
                      ? "bg-white dark:bg-white/[0.08] text-slate-900 dark:text-white shadow-xs"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Вход
                </button>
                <button
                  type="button"
                  onClick={() => toggleMode(true)}
                  className={`py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                    isRegister
                      ? "bg-white dark:bg-white/[0.08] text-slate-900 dark:text-white shadow-xs"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  Регистрация
                </button>
              </div>

              {/* Global Error Banner */}
              {generalError && (
                <div className="mb-5 p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200/80 dark:border-rose-800/60 rounded-2xl flex items-start gap-3 text-rose-600 dark:text-rose-400 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span>{generalError}</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {isRegister ? (
                  <>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                        Email адрес
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" strokeWidth={1.75} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="student@example.com"
                          disabled={isSubmitting}
                          className={`w-full bg-slate-50/70 dark:bg-white/[0.03] border ${
                            fieldErrors.email
                              ? "border-rose-500 ring-1 ring-rose-500"
                              : "border-slate-200/80 dark:border-white/[0.08]"
                          } rounded-2xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#007EA7] transition font-normal`}
                        />
                      </div>
                      {fieldErrors.email && (
                        <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                        Имя пользователя
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" strokeWidth={1.75} />
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="student_hero"
                          disabled={isSubmitting}
                          className={`w-full bg-slate-50/70 dark:bg-white/[0.03] border ${
                            fieldErrors.username
                              ? "border-rose-500 ring-1 ring-rose-500"
                              : "border-slate-200/80 dark:border-white/[0.08]"
                          } rounded-2xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#007EA7] transition font-normal`}
                        />
                      </div>
                      {fieldErrors.username && (
                        <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">
                          {fieldErrors.username}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                      Email или имя пользователя
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" strokeWidth={1.75} />
                      <input
                        type="text"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                        placeholder="student@example.com или логин"
                        disabled={isSubmitting}
                        className={`w-full bg-slate-50/70 dark:bg-white/[0.03] border ${
                          fieldErrors.login
                            ? "border-rose-500 ring-1 ring-rose-500"
                            : "border-slate-200/80 dark:border-white/[0.08]"
                        } rounded-2xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#007EA7] transition font-normal`}
                      />
                    </div>
                    {fieldErrors.login && (
                      <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">
                        {fieldErrors.login}
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                    Пароль
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" strokeWidth={1.75} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      disabled={isSubmitting}
                      className={`w-full bg-slate-50/70 dark:bg-white/[0.03] border ${
                        fieldErrors.password
                          ? "border-rose-500 ring-1 ring-rose-500"
                          : "border-slate-200/80 dark:border-white/[0.08]"
                      } rounded-2xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#007EA7] transition font-normal`}
                    />
                  </div>
                  {fieldErrors.password && (
                    <p className="text-rose-600 dark:text-rose-400 text-xs mt-1">
                      {fieldErrors.password}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 py-3 bg-[#007EA7] hover:bg-[#0093C8] active:bg-[#005980] disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-full shadow-xs flex items-center justify-center gap-2 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.75} />
                      <span>{isRegister ? "Создаем аккаунт..." : "Входим в аккаунт..."}</span>
                    </>
                  ) : (
                    <span>{isRegister ? "Начать подготовку" : "Войти в PrepSphere"}</span>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/[0.05] text-center text-xs text-slate-400">
                Единый аккаунт для симуляторов IELTS Academic и Digital SAT.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-500">
          Loading PrepSphere...
        </div>
      }
    >
      <AuthForm />
    </Suspense>
  );
}
