import { WritingTaskDataWithModel } from "@/components/ielts-examiner-window";

export const IELTS_WRITING_TASKS: Record<string, WritingTaskDataWithModel> = {
  "task1-bar": {
    id: "task1-bar",
    taskNumber: 1,
    type: "bar",
    typeName: "Bar Chart",
    title: "Global Renewable Electricity Generation (2018–2024)",
    prompt:
      "The bar chart below illustrates the proportion of total electricity generated from renewable sources (Wind, Solar, and Hydro) in four countries (Germany, United Kingdom, China, and the United States) between 2018 and 2024.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Paraphrase the prompt and describe what the categories and axes depict.",
      "Overview: State the overarching trends (Germany leading overall renewable share, solar experiencing the steepest rate of expansion across all four nations).",
      "Body Paragraph 1: Detailed figures for Germany and the United Kingdom, comparing wind and hydro volumes.",
      "Body Paragraph 2: Detailed figures for China and the United States, highlighting solar growth trajectories.",
    ],
    modelEssay: `The bar chart delineates the proportion of electricity produced from three distinct renewable sources—wind, solar, and hydroelectric power—across four nations between 2018 and 2024.

Overall, Germany consistently generated the highest cumulative proportion of its electricity from renewable alternatives, whereas China demonstrated the most rapid rate of solar expansion. Moreover, while wind power represented the predominant source in European countries, hydroelectric energy remained comparatively stable but secondary across all evaluated territories.

In Germany, renewables accounted for the largest overall share, with wind energy generating approximately 32% of total power by 2024, closely accompanied by solar at 22%, whereas hydro contributed a modest 6%. A similar pattern was observable in the United Kingdom, where wind served as the primary contributor at 29%, substantially eclipsing both solar (11%) and hydro (3%).

Conversely, the United States and China exhibited lower overall percentages but substantial acceleration in solar capacity. China’s solar generation climbed markedly to 18%, matching its wind output (18%), alongside a 14% contribution from hydro. In the United States, renewables formed a more balanced distribution, with wind and hydro contributing 15% and 12% respectively, while solar expanded moderately to attain 9% of national generation.`,
    modelKeyFeatures: [
      "Germany established paramount position across wind and solar.",
      "Solar experienced steep exponential growth globally.",
      "Hydro remained stagnant but foundational.",
    ],
    modelVocabHighlights: [
      { term: "delineates", explanation: "Accurately illustrates / maps out data" },
      { term: "predominant source", explanation: "The principal / leading component" },
      { term: "substantially eclipsing", explanation: "Overtaking by a large margin" },
      { term: "cumulative proportion", explanation: "Aggregate percentage share" },
    ],
  },

  "task1-line": {
    id: "task1-line",
    taskNumber: 1,
    type: "line",
    typeName: "Line Graph",
    title: "International Air Passenger Traffic by Region (1990–2020)",
    prompt:
      "The line graph shows changes in the number of international commercial airline passengers (in millions) across three major regions from 1990 to 2020.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Paraphrase the title and timeline of passenger traffic across the three regions.",
      "Overview: Highlight the general upward trajectory in all regions followed by the dramatic sharp decline towards 2020.",
      "Body Paragraph 1: Contrast European and North American volumes from 1990 to 2010.",
      "Body Paragraph 2: Describe Asia-Pacific's rapid escalation post-2005 and the universal 2020 dip.",
    ],
    modelEssay: `The line graph traces variations in the volume of international commercial airline passengers, denominated in millions, across Europe, North America, and the Asia-Pacific region over a thirty-year timeframe from 1990 to 2020.

Overall, international passenger traffic across all three regions experienced sustained upward trajectories for most of the period, with Asia-Pacific recording the most exponential growth. However, this protracted expansion culminated in an unprecedented, precipitous collapse in 2020 due to global travel disruptions.

Between 1990 and 2005, Europe held the paramount position, with passenger figures climbing steadily from 180 million to roughly 310 million. North America mirrored this upward progression, advancing from 140 million to approximately 240 million over the same interval. From 2005 onwards, both regions continued their steady ascent, with Europe peaking at around 420 million and North America reaching 310 million by 2019.

In stark contrast, the Asia-Pacific sector began at a modest 80 million in 1990 but accelerated dramatically after 2005, eventually eclipsing North America around 2012 and surging to an apex of 390 million in 2019. In 2020, however, all three regions witnessed a catastrophic downturn, with European and Asia-Pacific numbers plunging to under 120 million, and North America descending to roughly 90 million.`,
    modelKeyFeatures: [
      "Upward progression from 1990 to 2019 across all three continents.",
      "Exponential acceleration in Asia-Pacific post-2005.",
      "Catastrophic collapse in 2020.",
    ],
    modelVocabHighlights: [
      { term: "upward trajectories", explanation: "Rising trend patterns" },
      { term: "protracted expansion", explanation: "Long-lasting growth period" },
      { term: "precipitous collapse", explanation: "Extremely steep and sudden fall" },
      { term: "surging to an apex", explanation: "Peaking at the highest recorded point" },
    ],
  },

  "task1-pie": {
    id: "task1-pie",
    taskNumber: 1,
    type: "pie",
    typeName: "Pie Charts",
    title: "Household Energy Consumption Distribution (2010 vs 2025)",
    prompt:
      "The two pie charts compare the distribution of domestic household energy expenditure across different appliances and utilities in 2010 and projected figures for 2025.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Rephrase the prompt identifying the two comparative temporal periods and domestic categories.",
      "Overview: Point out the reduction in space heating dominance and the surge in digital/electronic appliance power consumption.",
      "Body Paragraph 1: Analyze heating, water heating, and cooling percentages.",
      "Body Paragraph 2: Analyze kitchen appliances, lighting, and computing electronics.",
    ],
    modelEssay: `The two pie charts elucidate the breakdown of residential power consumption categorized by domestic utility in 2010 alongside projected figures for 2025.

Overall, the domestic energy profile indicates a discernible transition towards personal computing and electronic devices, coupled with a notable reduction in the proportion allocated to domestic space heating. Despite this decrease, heating remains the single largest household energy expenditure across both surveyed years.

In 2010, space heating constituted over half of all domestic power consumption at 52%, with water heating representing the second largest share at 20%. Kitchen appliances accounted for 14%, while lighting and electronic appliances comprised minor fractions at 8% and 6%, respectively.

By 2025, the proportion dedicated to space heating is forecasted to contract substantially to 38%. Conversely, electricity consumed by electronic devices and home computers is projected to undergo a three-fold surge to 18%. Water heating is anticipated to experience a modest decrease to 16%, while kitchen appliances and residential lighting are estimated to stabilize at 15% and 13% of aggregate household power.`,
    modelKeyFeatures: [
      "Space heating contracted from 52% to 38% but retained dominance.",
      "Electronic devices tripled from 6% to 18%.",
      "Minor appliances displayed incremental stability.",
    ],
    modelVocabHighlights: [
      { term: "elucidate the breakdown", explanation: "Clearly show the categorization" },
      { term: "discernible transition", explanation: "Clearly visible shift in distribution" },
      { term: "forecasted to contract", explanation: "Expected to shrink / reduce" },
      { term: "aggregate household power", explanation: "Total combined domestic electricity" },
    ],
  },

  "task1-table": {
    id: "task1-table",
    taskNumber: 1,
    type: "table",
    typeName: "Data Table",
    title: "Public Transport Patronage & Commuter Satisfaction in 5 Cities",
    prompt:
      "The table provides data regarding daily transit passenger numbers, ticket affordability indexes, and user satisfaction ratings in five capital cities in 2023.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Outline the table scope, metrics measured, and the five cities evaluated.",
      "Overview: Note that highest satisfaction does not necessarily correlate with highest daily rider volumes.",
      "Body Paragraph 1: Compare passenger volumes and punctuality rates.",
      "Body Paragraph 2: Correlate affordability scores with overall customer satisfaction ratings.",
    ],
    modelEssay: `The table benchmarks five major metropolitan transit networks—Tokyo, London, Vienna, New York, and Singapore—across daily commuter volume, operational punctuality, monthly transit pass expense, and overall commuter satisfaction in 2023.

Overall, transit systems with superior punctuality and moderate pricing consistently recorded higher customer satisfaction, regardless of passenger volume. Tokyo and Vienna demonstrated the highest customer approval ratings, whereas New York registered the lowest across both punctuality and satisfaction metrics.

Tokyo accommodated the highest patronage, conveying 7.2 million daily riders with a near-perfect punctuality rate of 99.2% and an approval rate of 94%, with monthly passes averaging $115. Vienna, while recording a much smaller ridership of 1.9 million, attained the highest overall commuter satisfaction at 96%, complemented by the most economical monthly fare ($40) and strong 96.8% punctuality. Singapore similarly exhibited exemplary performance, registering 91% satisfaction alongside 98.5% timeliness for its 3.1 million daily passengers.

In contrast, London and New York exhibited lower commuter satisfaction despite substantial ridership. London carried 3.8 million passengers daily but levied the most expensive monthly fee ($185), resulting in a satisfaction rate of 78%. New York ranked lowest among all cities, recording an 82.1% punctuality rate and an approval rating of only 64% among its 4.3 million daily commuters.`,
    modelKeyFeatures: [
      "Tokyo led ridership (7.2M) and punctuality (99.2%).",
      "Vienna achieved peak satisfaction (96%) due to low fare ($40).",
      "New York had lowest reliability (82.1%) and lowest approval (64%).",
    ],
    modelVocabHighlights: [
      { term: "benchmarks", explanation: "Evaluates and contrasts against standards" },
      { term: "accommodated patronage", explanation: "Served the passenger volume" },
      { term: "economical monthly fare", explanation: "Cost-effective ticket pricing" },
      { term: "levied the fee", explanation: "Imposed / charged the cost" },
    ],
  },

  "task1-process": {
    id: "task1-process",
    taskNumber: 1,
    type: "process",
    typeName: "Process Diagram",
    title: "The Industrial Recycling & Reprocessing of Plastic Bottles",
    prompt:
      "The diagram illustrates the sequential stages involved in the collection, mechanical recycling, and industrial transformation of post-consumer plastic bottles into synthetic fleece clothing.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Define the cyclic process, starting from consumer sorting and ending at finished manufactured apparel.",
      "Overview: Mention the total number of linear stages and the transformation from rigid plastic to spun yarn.",
      "Body Paragraph 1: Detail the mechanical preparation (cleaning, colour sorting, shredding into flakes).",
      "Body Paragraph 2: Detail the thermal extrusion, yarn spinning, and weaving into fleece garments.",
    ],
    modelEssay: `The flowchart delineates the multi-stage linear sequence through which discarded consumer plastic bottles are collected, mechanically processed, and transformed into commercial fleece apparel.

Overall, the manufacturing procedure comprises six distinct operational phases, commencing with initial post-consumer sorting and concluding with the production of finished textiles. The progression converts rigid polyethylene terephthalate (PET) containers into soft polyester woven fabric through mechanical and thermal techniques.

Initially, post-consumer plastic containers are gathered, sorted according to polymer specifications and colour, and cleansed of residual contaminants. During the second phase, these bottles undergo industrial shredding to produce fine, uniform plastic flakes. Subsequently, these flakes are transferred to a heating cylinder where thermal melting takes place, enabling the molten plastic to be extruded into standardized pellets.

In the fourth stage, the extruded pellets are reheated and mechanically drawn into ultra-fine polyester yarn filaments. These threads are subsequently spooled and spun into textured rolls of fleece fabric in stage five. Finally, the manufactured textile is cut and tailored to fabricate consumer fleece jackets and garments, thereby completing the recycling cycle.`,
    modelKeyFeatures: [
      "6 linear sequential industrial stages.",
      "Mechanical preparation (sorting, flaking).",
      "Thermal extrusion into pellets, spinning yarn, tailored fleece.",
    ],
    modelVocabHighlights: [
      { term: "delineates the linear sequence", explanation: "Shows the step-by-step order" },
      { term: "residual contaminants", explanation: "Leftover dirty particles/impurities" },
      { term: "extruded into pellets", explanation: "Forced through a die into small grains" },
      { term: "ultra-fine filaments", explanation: "Extremely thin threads" },
    ],
  },

  "task1-map": {
    id: "task1-map",
    taskNumber: 1,
    type: "map",
    typeName: "Map Comparison",
    title: "Redevelopment of Port Haven Industrial Waterfront (2000 vs Now)",
    prompt:
      "The two maps illustrate the urban redevelopment of the Port Haven docklands area between the year 2000 and the present day.\n\nSummarize the information by selecting and reporting the main features, and make comparisons where relevant.",
    durationMinutes: 20,
    minWords: 150,
    recommendedStructure: [
      "Introduction: Rephrase the prompt indicating the spatial location and the redevelopment timeframe.",
      "Overview: State the overarching shift from a derelict industrial commercial port to a pedestrianized residential and leisure zone.",
      "Body Paragraph 1: Describe the transformation of cargo warehouses into luxury apartments and a technology hub.",
      "Body Paragraph 2: Describe infrastructural additions including footbridges, promenade gardens, and public transport links.",
    ],
    modelEssay: `The pair of maps illustrates the architectural and infrastructural metamorphosis of the Port Haven industrial docklands between the year 2000 and the present day.

Overall, the territory has transitioned from an obsolete, heavy-freight dockyard into a revitalized residential, commercial, and recreational waterfront district, with prominent expansions in public transit and green spaces.

In 2000, the northern shoreline was dominated by heavy industrial cargo docks and cranes, situated adjacent to three extensive disused brick warehouses. The eastern sector contained a solitary industrial freight rail line alongside an enclosed, polluted wasteland basin. Public amenities and green foliage were entirely absent.

At present, the industrial apparatus has been completely dismantled. The three historic warehouses have been preserved and redeveloped into luxury loft apartments and creative studios. To the north, a pedestrianized promenade featuring outdoor cafes and manicured parks has replaced the cargo berths, while the disused basin has been converted into a clean marina for sailing vessels. Crucially, transport connectivity has been upgraded through a new light rail passenger terminal and a pedestrian suspension footbridge spanning the inlet.`,
    modelKeyFeatures: [
      "Conversion from cargo port to residential waterfront.",
      "Preservation and repurposing of warehouses into lofts.",
      "New pedestrian bridge, marina, and light rail station.",
    ],
    modelVocabHighlights: [
      { term: "infrastructural metamorphosis", explanation: "Complete structural transformation" },
      { term: "obsolete, heavy-freight dockyard", explanation: "Outdated shipping cargo port" },
      { term: "industrial apparatus dismantled", explanation: "Heavy equipment removed" },
      { term: "pedestrianized promenade", explanation: "Walkway reserved for foot traffic" },
    ],
  },

  "task2-opinion": {
    id: "task2-opinion",
    taskNumber: 2,
    type: "opinion",
    typeName: "Opinion (Agree or Disagree)",
    title: "AI and Automated Systems in Creative Arts",
    prompt:
      "Some people argue that artificial intelligence will eventually replace human artists, writers, and musicians.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Paraphrase the prompt statement, formulate a direct thesis statement indicating whether you agree, disagree, or take a qualified stance.",
      "Body Paragraph 1: Address the capabilities and efficiency of generative AI in replicating stylistic patterns, drafting, and algorithmic composition.",
      "Body Paragraph 2: Defend the irreplaceable core of human emotional experience, existential consciousness, and genuine cultural empathy in authentic art.",
      "Conclusion: Reiterate your core thesis in fresh vocabulary and provide a brief forward-looking perspective.",
    ],
    modelEssay: `It is often asserted that advances in artificial intelligence will ultimately render human painters, writers, and musicians obsolete. While generative algorithms can mimic complex aesthetic conventions with unprecedented velocity, I fundamentally disagree with the premise that machines will entirely supplant human creative practitioners, as authentic art remains intrinsically tethered to sentient consciousness and lived emotional experiences.

Undeniably, automated neural networks possess extraordinary technical competence in synthesizing artistic outputs. Contemporary machine learning models are capable of generating polyphonic musical arrangements, high-fidelity visual illustrations, and coherent prose in seconds by parsing massive datasets of historical human masterpieces. In commercial sectors such as graphic design, advertising copy, and video game scoring, automated systems already expedite workflows and outpace manual human productivity. Consequently, purely technical craft is no longer the exclusive preserve of humanity.

However, artistic value does not merely emanate from technical execution; it derives fundamentally from subjective human experience, emotional vulnerability, and existential reflection. An algorithm generates art via statistical probabilistic predictions, devoid of genuine grief, moral dilemma, philosophical doubt, or transcendent joy. When audiences engage with Vincent van Gogh’s turbulent canvases or Ludwig van Beethoven’s late string quartets, they resonate with another consciousness that endured physical suffering and psychological yearning. Because synthetic intelligence possesses neither consciousness nor lived mortality, its creations lack organic intent and existential relevance, reducing its output to sophisticated mimicry rather than authentic revelation.

In conclusion, although artificial intelligence will undoubtedly transform the economic landscape of commercial art and function as a versatile creative tool, it cannot displace the human creator. The core impulse of artistic expression—the desire of conscious beings to make meaning of their existence—remains an exclusively human domain.`,
    modelKeyFeatures: [
      "Clear thesis statement: fundamentally disagree with complete replacement.",
      "Balanced concession: admits AI's speed and commercial efficiency in Body 1.",
      "Deep philosophical argumentation: human mortality, empathy, consciousness in Body 2.",
      "Cohesive lexical sophistication: sentient consciousness, probabilistic predictions, organic intent.",
    ],
    modelVocabHighlights: [
      { term: "intrinsically tethered", explanation: "Inseparably connected by nature" },
      { term: "sentient consciousness", explanation: "Aware, living self-experience" },
      { term: "exclusive preserve", explanation: "Sole domain / monopoly" },
      { term: "sophisticated mimicry", explanation: "Complex artificial copying" },
    ],
  },

  "task2-discussion": {
    id: "task2-discussion",
    taskNumber: 2,
    type: "discussion",
    typeName: "Discussion (Both Views + Opinion)",
    title: "State-Funded Higher Education vs Personal Tuition",
    prompt:
      "Some people believe that tertiary university education should be completely tuition-free for all citizens, while others believe students should fund their own degrees.\n\nDiscuss both views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Paraphrase both perspectives and explicitly outline your thesis/opinion.",
      "Body Paragraph 1: Discuss arguments for free state-funded higher education (social mobility, meritocracy, skilled national workforce).",
      "Body Paragraph 2: Discuss arguments for tuition fees (fiscal sustainability, preventing university underfunding, student personal commitment).",
      "Conclusion: Synthesize both arguments, reinforcing your personal viewpoint with reasoned justification.",
    ],
    modelEssay: `The debate over university tuition financing has long divided educational policymakers. While certain commentators maintain that tertiary education ought to be fully financed by the state for every eligible citizen, others contend that students should personally fund their degrees. Although both perspectives offer compelling socioeconomic arguments, I maintain that higher education should be publicly subsidized, supplemented by income-contingent graduate contributions.

Proponents of universal state-funded tertiary education argue that higher education is a public good indispensable to modern knowledge economies. When access to universities is unrestricted by economic means, meritocratic social mobility is preserved, preventing generational disparities in wealth from entrenching social inequality. Furthermore, nations that invest extensively in tertiary education cultivate a highly qualified domestic workforce comprising engineers, medical doctors, and scientific researchers. This skilled labour force fuels macroeconomic productivity and generates greater long-term tax revenues that far surpass initial state expenditures.

Conversely, advocates of individual tuition fees argue that free tertiary education constitutes a regressive fiscal policy that disproportionately benefits affluent demographics who already dominate university admissions. From this perspective, state financing forces lower-income taxpayers without degrees to subsidize the elevated earning potential of university graduates. Furthermore, requiring students to invest financially in their qualifications fosters greater academic accountability and ensures institutions maintain competitive infrastructural standards without straining sovereign fiscal reserves.

In my assessment, although personal investment encourages student diligence, tuition fees frequently deter qualified individuals from disadvantaged backgrounds. The most equitable equilibrium involves comprehensive state funding upfront, paired with an income-contingent repayment framework once graduates surpass an average national earnings threshold. In conclusion, tertiary education is fundamentally an investment in national prosperity that governments must guarantee accessible to all.`,
    modelKeyFeatures: [
      "Clear balanced overview of both societal and economic views.",
      "Nuanced personal position: income-contingent graduate repayments.",
      "Rigorous coherence and thematic progression across all 4 paragraphs.",
    ],
    modelVocabHighlights: [
      { term: "meritocratic social mobility", explanation: "Advancement based on talent rather than wealth" },
      { term: "regressive fiscal policy", explanation: "Policy burdening the less affluent disproportionately" },
      { term: "income-contingent framework", explanation: "Repayment linked to graduate earnings" },
      { term: "equitable equilibrium", explanation: "Fair, balanced compromise" },
    ],
  },

  "task2-advantages": {
    id: "task2-advantages",
    taskNumber: 2,
    type: "advantages",
    typeName: "Advantages & Disadvantages",
    title: "The Rapid Transition to a Cashless Society",
    prompt:
      "In many countries, physical banknotes and coins are increasingly being replaced by contactless payments, mobile apps, and digital transactions.\n\nDo the advantages of a cashless society outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Introduce the global cashless trend and state your verdict on whether benefits surpass drawbacks.",
      "Body Paragraph 1: Examine the substantial benefits (frictionless commerce, reduced street crime, automated bookkeeping, efficiency).",
      "Body Paragraph 2: Scrutinize the risks (cyber vulnerability, tech outages, marginalization of senior citizens or unbanked populations).",
      "Conclusion: Weigh both sides decisively, reaffirming why advantages (or disadvantages) are more significant in the long term.",
    ],
    modelEssay: `In numerous contemporary economies, traditional banknotes and coinage are systematically relinquishing their dominance to contactless interfaces, mobile wallets, and digital financial channels. In my view, the substantial advantages of transitioning towards a cashless ecosystem—principally commercial efficiency, enhanced security, and economic transparency—decisively outweigh the associated drawbacks.

The primary benefit of a cashless infrastructure is unparalleled operational frictionlessness. For individual consumers, digital platforms eliminate the necessity of carrying physical currency, enabling instantaneous domestic and international transactions. For commercial enterprises, digital transactions dramatically curtail overhead expenses associated with manual cash handling, transportation, and security apparatus. Moreover, a comprehensive digital payments ledger serves as a potent deterrent against black-market activities, money laundering, and tax evasion, thereby reinforcing governmental fiscal health and regulatory compliance.

Nevertheless, critics legitimately highlight vulnerabilities regarding cyber fragility and social exclusion. Complete reliance on digital financial networks exposes individuals and national economies to catastrophic vulnerabilities during telecommunication outages, hardware failures, or state-sponsored cyberattacks. Furthermore, transitioning abruptly to electronic currency risks marginalizing vulnerable societal cohorts, notably elderly citizens who lack digital literacy and unbanked lower-income populations who lack formal credit access.

Notwithstanding these valid concerns, technological safeguards and governmental regulatory frameworks can mitigate these societal risks through public education campaigns, robust encryption protocols, and mandated offline fallback systems. The macro-level enhancements in logistical efficiency, crime deterrence, and economic velocity are far too compelling to halt. In conclusion, provided equitable digital access and resilient infrastructure are prioritized, the transition to a cashless paradigm confers benefits that substantially supersede its transitory disadvantages.`,
    modelKeyFeatures: [
      "Decisive answer in Introduction and Conclusion: benefits decisively outweigh risks.",
      "Detailed, high-level analysis of financial crime deterrence and transaction frictionlessness.",
      "Substantive counter-balancing of cyber fragility and demographic exclusion.",
    ],
    modelVocabHighlights: [
      { term: "relinquishing their dominance", explanation: "Giving up their primary position" },
      { term: "operational frictionlessness", explanation: "Smooth transactions without barrier" },
      { term: "potent deterrent", explanation: "Powerful preventative measure" },
      { term: "substantially supersede", explanation: "Greatly surpass / outweigh" },
    ],
  },

  "task2-problem": {
    id: "task2-problem",
    taskNumber: 2,
    type: "problem",
    typeName: "Problem & Solution",
    title: "Escalating Urban Traffic Congestion & Emissions",
    prompt:
      "In many metropolitan regions around the globe, severe traffic congestion has become a daily reality, causing widespread delays and rising air pollution.\n\nWhat are the primary causes of this problem, and what practical measures can governments and city planners implement to resolve it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Introduce the problem of urban gridlock and state that systemic causes require multi-faceted policy interventions.",
      "Body Paragraph 1: Identify root causes (poor urban zoning, inadequate public rail networks, car ownership subsidies, suburban sprawl).",
      "Body Paragraph 2: Propose actionable solutions (congestion charging zones, subsidized bus rapid transit, pedestrian infrastructure, remote work incentives).",
      "Conclusion: Summarize the causes and emphasize that sustained municipal commitment will alleviate congestion.",
    ],
    modelEssay: `Across major metropolitan centers worldwide, intensifying traffic congestion and vehicular atmospheric emissions have evolved into severe public crises, exacting substantial economic tolls and diminishing urban quality of life. This escalating dilemma is primarily driven by deficient urban spatial planning and underfunded public transit networks; however, governments can effectively mitigate these crises through targeted congestion pricing schemes and extensive expansion of green mass transit.

The predominant factor precipitating urban gridlock is poor spatial coordination between residential zoning and commercial employment hubs. In many modern metropolises, suburban sprawl compels millions of residents to undertake protracted daily commutes, which, when coupled with inadequate or dilapidated mass transport infrastructure, leaves private automobiles as the sole viable commuting mode. Additionally, legacy subsidies on fuel and road expansion have historically perpetuated a culture of individual car dependency, exacerbating carbon output and particulate pollution in inner-city corridors.

To resolve this critical dilemma, municipalities must adopt multi-pronged strategic interventions. Foremost among these is the implementation of cordon congestion pricing zones, exemplified by London and Singapore, which levy substantial fees on private vehicles entering central commercial districts during peak hours. Revenue generated from these charges should be ring-fenced to subsidize and modernize high-capacity electric bus rapid transit (BRT) and regional light rail systems. Concurrently, city planners should cultivate decentralized '15-minute city' frameworks alongside dedicated cycling arterial routes, rendering motorized transport unnecessary for everyday errands.

In conclusion, chronic urban gridlock stems from an unsustainable reliance on private automobiles fostered by suboptimal city planning and transit neglect. By instituting targeted congestion levies and aggressively investing in electrified public transportation networks, governments can restore logistical mobility and foster environmentally sustainable urban habitats.`,
    modelKeyFeatures: [
      "Directly addresses both Causes and Practical Solutions.",
      "Concrete real-world references (London, Singapore congestion pricing, BRT).",
      "Impeccable lexical variety regarding urban planning and ecological sustainability.",
    ],
    modelVocabHighlights: [
      { term: "precipitating urban gridlock", explanation: "Causing extreme city traffic paralysis" },
      { term: "protracted daily commutes", explanation: "Excessively long travel to work" },
      { term: "cordon congestion pricing", explanation: "Zone-based entrance tolls for vehicles" },
      { term: "ring-fenced to subsidize", explanation: "Legally protected specifically to fund" },
    ],
  },

  "task2-twopart": {
    id: "task2-twopart",
    taskNumber: 2,
    type: "twopart",
    typeName: "Two-Part / Direct Question",
    title: "Prolonged Work Hours & The Decline of Family Life",
    prompt:
      "In contemporary society, many full-time workers spend significantly longer hours at work than previous generations, resulting in reduced family time.\n\nWhy is this occurring? Is this a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience. Write at least 250 words.",
    durationMinutes: 40,
    minWords: 250,
    recommendedStructure: [
      "Introduction: Paraphrase the trend and provide succinct thesis answers to both core questions.",
      "Body Paragraph 1 (Question 1): Explain the drivers behind longer work hours (cost of living, hyper-competitive global economies, digital connectivity).",
      "Body Paragraph 2 (Question 2): Argue why this is predominantly a negative trend (family breakdown, stress, developmental deficit in children).",
      "Conclusion: Summarize the causative factors and reaffirm the negative societal repercussions.",
    ],
    modelEssay: `In contemporary society, an increasing proportion of full-time employees allocate significantly longer hours to their professional commitments than prior generations, severely diminishing the temporal space available for familial engagement. This phenomenon is driven primarily by escalating living costs and the hyper-competitive demands of a globalized digital economy; in my view, it represents an overwhelmingly negative societal development that undermines personal well-being and domestic stability.

The chief catalyst behind elongated working hours is the steep inflation in essential living expenditures, particularly housing, healthcare, and education. To maintain basic financial security in competitive urban environments, workers often feel compelled to work overtime or take on supplementary roles. Furthermore, ubiquitous digital connectivity—enabled by portable computing and corporate messaging software—has dissolved the conventional boundary between office hours and personal life, cultivating an implicit expectation of perpetual employee availability in corporate cultures.

This trajectory is unequivocally detrimental to the fabric of human society. When parents spend their primary waking hours immersed in professional duties, domestic relationships suffer acute deterioration. Children deprived of sustained parental guidance and emotional availability frequently exhibit emotional distress, behavioral challenges, and diminished academic engagement. Moreover, chronic workplace strain correlates strongly with widespread physical ailments, psychological burnout, and elevated rates of marital breakdown. A society that prioritizes commercial productivity above family cohesion inexorably corrodes its own communal foundation.

In conclusion, protracted work hours result from intensified macroeconomic pressures and pervasive digital connectivity. Because this trend inflicts profound damage upon familial health, psychological well-being, and social cohesion, it constitutes an intensely negative phenomenon that demands legislative reform and cultural recalibration.`,
    modelKeyFeatures: [
      "Direct answers to Question 1 (causes) and Question 2 (evaluation) in both Introduction and Conclusion.",
      "Rich sociological and psychological arguments.",
      "Flawless grammar with participial phrases, conditionals, and inverted sentence structures.",
    ],
    modelVocabHighlights: [
      { term: "diminishing temporal space", explanation: "Reducing available time" },
      { term: "chief catalyst", explanation: "Primary driving force / trigger" },
      { term: "unequivocally detrimental", explanation: "Completely and clearly harmful" },
      { term: "inexorably corrodes", explanation: "Unstoppably destroys / weakens over time" },
    ],
  },
};
