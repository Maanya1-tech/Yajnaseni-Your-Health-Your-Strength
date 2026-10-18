(() => {
  "use strict";

  const translations = {
    en: {
      navSymptoms: "Symptoms", navDiagnosis: "Probable Diagnosis", navJournal: "Health Journal", navResources: "Resources", navContact: "Contact Doctor", navGetStarted: "Get Started", navRegionalLanguages: "Regional Languages", navHealthResources: "Health Resources", navNutrition: "Diet & Nutrition", navWellness: "Lifestyle & Wellness",
      brandTagline: "Your Health. Your Strength.",
      heroEyebrow: "A HEALTHIER YOU, A STRONGER TOMORROW", heroTitle: "Understand Your Body,<br>Empower Yourself",
      heroCopy: "Yajnaseni is your supportive companion for women’s health. Get personalized insights, learn about your health and make informed decisions — with trusted information, in a space that understands you.",
      heroButton: "Start Symptom Check", heroLearnMore: "Learn More", heroMantra: "Your Health,<br>Your Strength",
      benefitTrusted: "Trusted Information", benefitTrustedCopy: "Evidence-based health resources",
      benefitPersonal: "Personalized Guidance", benefitPersonalCopy: "Insights based on your symptoms",
      benefitPrivacy: "Privacy Focused", benefitPrivacyCopy: "Your information stays confidential",
      benefitLanguages: "Multilingual Support", benefitLanguagesCopy: "Available in English and Kannada",
      featuresEyebrow: "EXPLORE OUR FEATURES", featuresTitle: "How We Support You", featuresIntro: "Everything you need for your health journey, in one place.",
      featureSymptoms: "Symptom Check", featureSymptomsCopy: "Understand what your symptoms could mean.",
      featureDiagnosis: "Probable Diagnosis", featureDiagnosisCopy: "Get possible explanations based on reliable sources.",
      featureJournal: "Health Journal", featureJournalCopy: "Track your symptoms, periods, mood and more.",
      featureResources: "Resources", featureResourcesCopy: "Explore articles on health, diet, lifestyle and wellness.",
      featureContact: "Contact Doctor", featureContactCopy: "Connect with a healthcare professional when needed.",
      whyTitle: "Why Yajnaseni?", whyWomen: "Designed for Women", whyEvidence: "Reliable & Evidence-based", whyEasy: "Easy to Use", whyInclusive: "Inclusive & Accessible",
      quoteText: "Your health journey matters.<br>You are not alone.",
      symptomPageTitle: "Let's understand how you feel", symptomPageCopy: "Choose the symptoms you've been experiencing. You can select multiple options.",
      symptomSearchPlaceholder: "Search symptoms, e.g. fatigue or cramps", categoryExplorerTitle: "Explore by category", selectAllHint: "Select all that apply",
      noSymptomsFound: "No symptoms found. Try a different search.", searchResults: "Search results",
      customSymptomTitle: "Something else?", customSymptomCopy: "Can't find your symptom? Add it here so you can describe your experience in your own words.",
      customSymptomPlaceholder: "Add a symptom in your own words", addSymptomButton: "Add symptom", customSymptomEmpty: "Please enter a symptom first.",
      customSymptomDuplicate: "That symptom is already listed. We've selected it for you.",
      selectedSymptomsTitle: "Your selected symptoms", clearSelectionButton: "Clear selection",
      selectedCountZero: "No symptoms selected yet", selectedCountOne: "1 symptom selected", selectedCountMany: "{count} symptoms selected",
      removeSymptomLabel: "Remove {symptom}", categorySelected: "Selected", continueButton: "Continue",
      symptomPrivacyNote: "Your selections stay in this browser and aren't saved.",
      detailsPageTitle: "A little more about what you're experiencing", detailsPageCopy: "These optional details help you prepare a clearer summary for a healthcare conversation.",
      selectedForSummary: "Symptoms you selected", describeLabel: "Anything else you'd like to share? (optional)",
      describePlaceholder: "Add any context you'd like to include in your summary",
      safetyNote: "This is for education, not diagnosis. For sudden, severe or concerning symptoms, seek advice from a healthcare professional.",
      backButton: "Back", viewSummaryButton: "View my summary", stepOneOfThree: "Step 1 of 3", stepTwoOfThree: "Step 2 of 3", stepThreeOfThree: "Step 3 of 3",
      catMenstrual: "Menstrual Health", catHormonal: "Hormonal Health", catSkin: "Skin & Hair", catMood: "Mood & Emotions", catBody: "Body & Energy", catSleep: "Sleep & Wellness",
      countSymptoms: "{count} symptoms",
      symptomPeriodPain: "Period pain or cramps", symptomIrregularPeriods: "Irregular periods", symptomHeavyBleeding: "Heavy bleeding",
      symptomMissedPeriods: "Missed periods", symptomSpotting: "Spotting between periods", symptomPms: "Premenstrual symptoms",
      symptomAcne: "Acne", symptomHairFall: "Hair fall", symptomFacialHair: "Unusual facial hair growth", symptomWeightChanges: "Weight changes",
      symptomHotFlashes: "Hot flashes", symptomLibido: "Changes in libido", symptomBreakouts: "Acne or breakouts", symptomHairThinning: "Hair thinning",
      symptomHairShedding: "Excessive hair shedding", symptomDrySkin: "Dry skin", symptomSkinChanges: "Unusual skin changes",
      symptomMoodSwings: "Mood swings", symptomAnxiety: "Anxiety or persistent worry", symptomLowMood: "Low mood", symptomIrritability: "Irritability",
      symptomConcentration: "Difficulty concentrating", symptomFatigue: "Fatigue", symptomHeadaches: "Headaches", symptomBloating: "Bloating",
      symptomBreastTenderness: "Breast tenderness", symptomPelvicDiscomfort: "Pelvic discomfort", symptomAppetiteChanges: "Appetite changes",
      symptomFallingAsleep: "Difficulty falling asleep", symptomWaking: "Waking frequently during the night", symptomUnrefreshed: "Feeling unrefreshed after sleep",
      durationLabel: "How long have you noticed these symptoms?", severityLabel: "How much are they affecting you?",
      feature1Title: "Everyday language", feature1Copy: "Describe what you feel naturally. No medical vocabulary needed.", feature2Title: "English & Kannada", feature2Copy: "Use the language that feels most comfortable to you.", feature3Title: "PCOS-focused information", feature3Copy: "Understand how symptoms can be associated with PCOS—and other causes.", feature4Title: "Doctor-ready summary", feature4Copy: "Bring your symptoms and questions into your next care conversation.",
      checkerEyebrow: "YOUR PRIVATE CHECK-IN", checkerTitle: "Let’s start with<br>what you’ve noticed.", checkerCopy: "There are no wrong words. Share as much or as little as you like. Your answers stay in this browser and aren’t sent anywhere.", reassurance: "This is an educational tool, not a diagnosis. You’re always the expert on your body.",
      examplesTitle: "Not sure what to write?", examplesCopy: "Try: “My periods have been unpredictable for a few months, and I’ve been feeling tired.”", useExample: "Use this example", stepLabel: "YOUR CHECK-IN", formTitle: "Tell us what’s going on", requiredNote: "All questions are optional except sharing at least one symptom.",
      symptoms: ["Irregular periods", "Acne", "Hair thinning or hair loss", "More facial or body hair", "Fatigue or low energy", "Weight changes", "Severe pelvic pain", "Very heavy bleeding", "Fainting"],
      durationLabel: "How long have you noticed this?", chooseOption: "Choose an option", durationDays: "A few days", durationWeeks: "A few weeks", durationMonths: "A few months", durationLonger: "More than 6 months", durationUnsure: "I’m not sure",
      severityLabel: "How much is it affecting you?", severityMild: "A little", severityModerate: "Somewhat", severitySevere: "A lot",
      followupTitle: "A couple more details (optional)", periodQuestion: "If relevant, how have your periods changed?", preferNot: "Choose an option or skip", periodIrregular: "They come at unpredictable times", periodMissed: "I’ve missed periods", periodHeavy: "They’ve been heavier than usual", periodPainful: "They’ve been more painful", periodNoChange: "No change / not relevant", impactQuestion: "How much do these symptoms affect daily life?", impactLow: "Not much", impactSome: "Some days", impactOften: "Often",
      submitButton: "Understand my symptoms", localOnly: "Your answers are processed on this device only.", validation: "Please describe or select at least one symptom to continue.",
      resultsEyebrow: "YOUR SYMPTOM SUMMARY", resultsTitle: "Here’s what we heard.", resultsIntro: "This is an educational summary of what you shared—not a diagnosis. Symptoms can have many different causes.",
      urgentTitleResult: "Please seek urgent medical care", urgentCopyResult: "You mentioned a symptom that can need urgent assessment. Please contact local emergency services or go to the nearest emergency department now, especially if the symptom is severe, worsening, or you feel faint or unwell. Do not wait for this tool to assess you.",
      routineTitleResult: "Consider arranging a healthcare visit", routineCopyResult: "If these symptoms are persistent, changing, or concerning to you, consider booking a routine appointment with a healthcare professional.",
      identifiedTitle: "Symptoms you mentioned", noneRecognized: "We couldn’t match specific symptom names, but your description is included in your report. A healthcare professional can help you explore it.",
      pcosTitle: "What this may be associated with", pcosCopy: "Some symptoms you reported—such as irregular periods, acne, or changes in hair growth—can occur with polycystic ovary syndrome (PCOS). Having one or more of these symptoms does not mean you have PCOS. Only a qualified clinician can assess your health in context; this tool does not estimate your likelihood.",
      alternativesTitle: "Other possible explanations", alternativesCopy: "Similar symptoms can also have other causes, such as stress, changes in sleep or routine, thyroid conditions, other hormone changes, medicines, or many other health factors. The relevant possibilities depend on your history and circumstances.",
      commonTitle: "PCOS: a little context", commonCopy: "PCOS is a health condition involving hormonal and metabolic features. Experiences vary. A clinician may consider menstrual history, symptoms, examination, and tests when deciding whether further evaluation is useful. No single symptom on its own establishes a diagnosis.",
      doctorTitle: "Questions you could ask a healthcare professional", doctorQ1: "What might be causing these symptoms, and what else should we consider?", doctorQ2: "Would any examination or tests be appropriate for me?", doctorQ3: "What changes or warning signs should prompt me to seek care sooner?",
      reportTitle: "Your doctor-ready summary", reportDate: "Report date", reportLanguage: "Language", reportSymptoms: "Reported symptoms", reportDuration: "Duration", reportSeverity: "Impact", reportFollowup: "Your answers", reportDescription: "Your description", reportNotProvided: "Not provided", reportQuestions: "Questions to discuss", noSymptomsListed: "No symptom labels recognized; see description above.", periodAnswer: "Period changes", impactAnswer: "Effect on daily life",
      printButton: "Print / Save as PDF", restartButton: "Start Again", disclaimer: "Important: Yajnaseni is for education and preparation only. It cannot diagnose PCOS or any other condition, rule conditions out, prescribe medicines, or replace professional medical care. Do not use it for urgent decisions.",
      careEyebrow: "YOUR WELLBEING COMES FIRST", careTitle: "Know when to reach out.", careIntro: "If symptoms are new, persistent, changing, or worrying you, a healthcare professional can help you understand what’s going on.",
      routineTitle: "Book a routine appointment", routineCopy: "Consider arranging a visit if periods are persistently irregular or absent, or if acne, hair changes, fatigue, or weight changes continue to concern you. A clinician can discuss your history and whether any evaluation is appropriate.",
      urgentTitle: "Get urgent medical help", urgentCopy: "Seek urgent care now for severe pelvic or abdominal pain, fainting, or very heavy bleeding—especially if you feel weak, dizzy, or unwell. Contact local emergency services if symptoms are severe or you may be in immediate danger.",
      careNote: "Yajnaseni does not diagnose, prescribe medicines, or replace care from a qualified professional. Never delay urgent care based on this tool.",
      footerText: "A thoughtful starting point for your health conversation.", footerPrivacy: "No account · No data collection", examplePeriod: "My periods have been coming at unpredictable times.", exampleSkin: "I have acne and have noticed more hair falling out."
    },
    kn: {
      navSymptoms: "ಲಕ್ಷಣಗಳು", navDiagnosis: "ಸಂಭಾವ್ಯ ರೋಗನಿರ್ಣಯ", navJournal: "ಆರೋಗ್ಯ ದಿನಚರಿ", navResources: "ಸಂಪನ್ಮೂಲಗಳು", navContact: "ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ", navGetStarted: "ಪ್ರಾರಂಭಿಸಿ", navRegionalLanguages: "ಪ್ರಾದೇಶಿಕ ಭಾಷೆಗಳು", navHealthResources: "ಆರೋಗ್ಯ ಸಂಪನ್ಮೂಲಗಳು", navNutrition: "ಆಹಾರ ಮತ್ತು ಪೋಷಣೆ", navWellness: "ಜೀವನಶೈಲಿ ಮತ್ತು ಕ್ಷೇಮ",
      brandTagline: "ನಿಮ್ಮ ಆರೋಗ್ಯ. ನಿಮ್ಮ ಶಕ್ತಿ.",
      heroEyebrow: "ಆರೋಗ್ಯವಂತ ನೀವು, ಬಲಿಷ್ಠ ನಾಳೆ", heroTitle: "ನಿಮ್ಮ ದೇಹವನ್ನು ಅರಿಯಿರಿ,<br>ನಿಮ್ಮನ್ನು ಸಬಲಗೊಳಿಸಿ",
      heroCopy: "ಮಹಿಳೆಯರ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಯಜ್ಞಸೇನಿ ನಿಮ್ಮ ಬೆಂಬಲದ ಸಂಗಾತಿ. ವೈಯಕ್ತಿಕ ಒಳನೋಟಗಳನ್ನು ಪಡೆಯಿರಿ, ನಿಮ್ಮ ಆರೋಗ್ಯದ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಮಾಹಿತಿಯೊಂದಿಗೆ ತಿಳಿದ ನಿರ್ಧಾರಗಳನ್ನು ಕೈಗೊಳ್ಳಿ.",
      heroButton: "ಲಕ್ಷಣ ಪರಿಶೀಲನೆ ಪ್ರಾರಂಭಿಸಿ", heroLearnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ", heroMantra: "ನಿಮ್ಮ ಆರೋಗ್ಯ,<br>ನಿಮ್ಮ ಶಕ್ತಿ",
      benefitTrusted: "ವಿಶ್ವಾಸಾರ್ಹ ಮಾಹಿತಿ", benefitTrustedCopy: "ಸಾಕ್ಷ್ಯಾಧಾರಿತ ಆರೋಗ್ಯ ಸಂಪನ್ಮೂಲಗಳು",
      benefitPersonal: "ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ", benefitPersonalCopy: "ನಿಮ್ಮ ಲಕ್ಷಣಗಳ ಆಧಾರದ ಒಳನೋಟಗಳು",
      benefitPrivacy: "ಗೌಪ್ಯತೆಗೆ ಆದ್ಯತೆ", benefitPrivacyCopy: "ನಿಮ್ಮ ಮಾಹಿತಿ ಗೌಪ್ಯವಾಗಿರುತ್ತದೆ",
      benefitLanguages: "ಬಹುಭಾಷಾ ಬೆಂಬಲ", benefitLanguagesCopy: "ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ಲಭ್ಯ",
      featuresEyebrow: "ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ", featuresTitle: "ನಾವು ನಿಮಗೆ ಹೇಗೆ ಬೆಂಬಲ ನೀಡುತ್ತೇವೆ", featuresIntro: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣಕ್ಕೆ ಬೇಕಾದ ಎಲ್ಲವೂ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.",
      featureSymptoms: "ಲಕ್ಷಣ ಪರಿಶೀಲನೆ", featureSymptomsCopy: "ನಿಮ್ಮ ಲಕ್ಷಣಗಳ ಅರ್ಥವನ್ನು ತಿಳಿಯಿರಿ.",
      featureDiagnosis: "ಸಂಭಾವ್ಯ ರೋಗನಿರ್ಣಯ", featureDiagnosisCopy: "ವಿಶ್ವಾಸಾರ್ಹ ಮೂಲಗಳ ಆಧಾರದ ಸಾಧ್ಯ ಕಾರಣಗಳು.",
      featureJournal: "ಆರೋಗ್ಯ ದಿನಚರಿ", featureJournalCopy: "ಲಕ್ಷಣಗಳು, ಮಾಸಿಕ, ಮನಸ್ಥಿತಿ ಮತ್ತಿತರವನ್ನು ದಾಖಲಿಸಿ.",
      featureResources: "ಸಂಪನ್ಮೂಲಗಳು", featureResourcesCopy: "ಆರೋಗ್ಯ, ಆಹಾರ, ಜೀವನಶೈಲಿ ಮತ್ತು ಕ್ಷೇಮದ ಲೇಖನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
      featureContact: "ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ", featureContactCopy: "ಅಗತ್ಯವಿದ್ದಾಗ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      whyTitle: "ಯಜ್ಞಸೇನಿ ಏಕೆ?", whyWomen: "ಮಹಿಳೆಯರಿಗಾಗಿ ವಿನ್ಯಾಸ", whyEvidence: "ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಸಾಕ್ಷ್ಯಾಧಾರಿತ", whyEasy: "ಬಳಸಲು ಸುಲಭ", whyInclusive: "ಎಲ್ಲರನ್ನೂ ಒಳಗೊಂಡ ಮತ್ತು ಸುಲಭವಾಗಿ ಬಳಸಬಹುದಾದ",
      quoteText: "ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯಾಣ ಮುಖ್ಯ.<br>ನೀವು ಒಬ್ಬರಲ್ಲ.",
      symptomPageTitle: "ನಿಮಗೆ ಹೇಗನಿಸುತ್ತಿದೆ ಎಂದು ತಿಳಿಯೋಣ", symptomPageCopy: "ನೀವು ಅನುಭವಿಸುತ್ತಿರುವ ಲಕ್ಷಣಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಆಯ್ಕೆ ಮಾಡಬಹುದು.",
      symptomSearchPlaceholder: "ಲಕ್ಷಣಗಳನ್ನು ಹುಡುಕಿ, ಉದಾ. ದಣಿವು ಅಥವಾ ಸೆಳೆತ", categoryExplorerTitle: "ವರ್ಗದ ಮೂಲಕ ಅನ್ವೇಷಿಸಿ", selectAllHint: "ಅನ್ವಯಿಸುವ ಎಲ್ಲವನ್ನೂ ಆಯ್ಕೆಮಾಡಿ",
      noSymptomsFound: "ಯಾವುದೇ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಬೇರೆ ಪದದಿಂದ ಹುಡುಕಿ.", searchResults: "ಹುಡುಕಾಟದ ಫಲಿತಾಂಶಗಳು",
      customSymptomTitle: "ಬೇರೆ ಏನಾದರೂ ಇದೆಯೇ?", customSymptomCopy: "ನಿಮ್ಮ ಲಕ್ಷಣ ಕಾಣುತ್ತಿಲ್ಲವೇ? ನಿಮ್ಮ ಅನುಭವವನ್ನು ನಿಮ್ಮದೇ ಮಾತುಗಳಲ್ಲಿ ವಿವರಿಸಲು ಅದನ್ನು ಇಲ್ಲಿ ಸೇರಿಸಿ.",
      customSymptomPlaceholder: "ನಿಮ್ಮದೇ ಮಾತುಗಳಲ್ಲಿ ಲಕ್ಷಣವನ್ನು ಸೇರಿಸಿ", addSymptomButton: "ಲಕ್ಷಣ ಸೇರಿಸಿ", customSymptomEmpty: "ಮೊದಲು ಒಂದು ಲಕ್ಷಣವನ್ನು ನಮೂದಿಸಿ.",
      customSymptomDuplicate: "ಆ ಲಕ್ಷಣ ಈಗಾಗಲೇ ಪಟ್ಟಿಯಲ್ಲಿದೆ. ಅದನ್ನು ಆಯ್ಕೆ ಮಾಡಿದ್ದೇವೆ.",
      selectedSymptomsTitle: "ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಲಕ್ಷಣಗಳು", clearSelectionButton: "ಆಯ್ಕೆಯನ್ನು ತೆರವುಗೊಳಿಸಿ",
      selectedCountZero: "ಇನ್ನೂ ಯಾವುದೇ ಲಕ್ಷಣಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ", selectedCountOne: "1 ಲಕ್ಷಣ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ", selectedCountMany: "{count} ಲಕ್ಷಣಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ",
      removeSymptomLabel: "{symptom} ತೆಗೆದುಹಾಕಿ", categorySelected: "ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ", continueButton: "ಮುಂದುವರಿಸಿ",
      symptomPrivacyNote: "ನಿಮ್ಮ ಆಯ್ಕೆಗಳು ಈ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಇರುತ್ತವೆ; ಉಳಿಸಲಾಗುವುದಿಲ್ಲ.",
      detailsPageTitle: "ನೀವು ಅನುಭವಿಸುತ್ತಿರುವುದರ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು", detailsPageCopy: "ಆರೋಗ್ಯ ವೃತ್ತಿಪರರೊಂದಿಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಲು ಈ ಐಚ್ಛಿಕ ವಿವರಗಳು ಸಹಾಯ ಮಾಡುತ್ತವೆ.",
      selectedForSummary: "ನೀವು ಆಯ್ಕೆ ಮಾಡಿದ ಲಕ್ಷಣಗಳು", describeLabel: "ಇನ್ನೇನಾದರೂ ಹಂಚಿಕೊಳ್ಳಲು ಬಯಸುವಿರಾ? (ಐಚ್ಛಿಕ)",
      describePlaceholder: "ನಿಮ್ಮ ಸಾರಾಂಶಕ್ಕೆ ಸೇರಿಸಬೇಕಾದ ಯಾವುದೇ ವಿವರವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ",
      safetyNote: "ಇದು ಮಾಹಿತಿ ನೀಡಲು, ರೋಗನಿರ್ಣಯ ಮಾಡಲು ಅಲ್ಲ. ಹಠಾತ್, ತೀವ್ರ ಅಥವಾ ಕಳವಳಕಾರಿ ಲಕ್ಷಣಗಳಿದ್ದರೆ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      backButton: "ಹಿಂದಕ್ಕೆ", viewSummaryButton: "ನನ್ನ ಸಾರಾಂಶ ನೋಡಿ", stepOneOfThree: "ಹಂತ 1 / 3", stepTwoOfThree: "ಹಂತ 2 / 3", stepThreeOfThree: "ಹಂತ 3 / 3",
      catMenstrual: "ಮಾಸಿಕ ಆರೋಗ್ಯ", catHormonal: "ಹಾರ್ಮೋನ್ ಆರೋಗ್ಯ", catSkin: "ಚರ್ಮ ಮತ್ತು ಕೂದಲು", catMood: "ಮನಸ್ಥಿತಿ ಮತ್ತು ಭಾವನೆಗಳು", catBody: "ದೇಹ ಮತ್ತು ಶಕ್ತಿ", catSleep: "ನಿದ್ರೆ ಮತ್ತು ಕ್ಷೇಮ",
      countSymptoms: "{count} ಲಕ್ಷಣಗಳು",
      symptomPeriodPain: "ಮಾಸಿಕದ ನೋವು ಅಥವಾ ಸೆಳೆತ", symptomIrregularPeriods: "ಅನಿಯಮಿತ ಮಾಸಿಕ", symptomHeavyBleeding: "ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವ",
      symptomMissedPeriods: "ಮಾಸಿಕ ತಪ್ಪುವುದು", symptomSpotting: "ಮಾಸಿಕಗಳ ಮಧ್ಯೆ ಚುಕ್ಕೆ ರಕ್ತಸ್ರಾವ", symptomPms: "ಮಾಸಿಕಪೂರ್ವ ಲಕ್ಷಣಗಳು",
      symptomAcne: "ಮೊಡವೆ", symptomHairFall: "ಕೂದಲು ಉದುರುವುದು", symptomFacialHair: "ಮುಖದ ಮೇಲೆ ಅಸಾಮಾನ್ಯ ಕೂದಲು ಬೆಳವಣಿಗೆ", symptomWeightChanges: "ತೂಕದ ಬದಲಾವಣೆ",
      symptomHotFlashes: "ಹಠಾತ್ ಬಿಸಿ ಅನುಭವ", symptomLibido: "ಲೈಂಗಿಕ ಆಸಕ್ತಿಯಲ್ಲಿ ಬದಲಾವಣೆ", symptomBreakouts: "ಮೊಡವೆ ಅಥವಾ ಚರ್ಮದ ಗುಳ್ಳೆಗಳು", symptomHairThinning: "ಕೂದಲು ತೆಳುವಾಗುವುದು",
      symptomHairShedding: "ಅತಿಯಾಗಿ ಕೂದಲು ಉದುರುವುದು", symptomDrySkin: "ಒಣ ಚರ್ಮ", symptomSkinChanges: "ಅಸಾಮಾನ್ಯ ಚರ್ಮದ ಬದಲಾವಣೆಗಳು",
      symptomMoodSwings: "ಮನಸ್ಥಿತಿಯ ಏರಿಳಿತ", symptomAnxiety: "ಆತಂಕ ಅಥವಾ ನಿರಂತರ ಚಿಂತೆ", symptomLowMood: "ಖಿನ್ನ ಮನಸ್ಥಿತಿ", symptomIrritability: "ಕಿರಿಕಿರಿ",
      symptomConcentration: "ಗಮನ ಕೇಂದ್ರೀಕರಿಸಲು ತೊಂದರೆ", symptomFatigue: "ದಣಿವು", symptomHeadaches: "ತಲೆನೋವು", symptomBloating: "ಹೊಟ್ಟೆ ಉಬ್ಬರ",
      symptomBreastTenderness: "ಸ್ತನಗಳಲ್ಲಿ ನೋವು ಅಥವಾ ಸೂಕ್ಷ್ಮತೆ", symptomPelvicDiscomfort: "ಶ್ರೋಣಿಯ ಅಸ್ವಸ್ಥತೆ", symptomAppetiteChanges: "ಹಸಿವಿನಲ್ಲಿ ಬದಲಾವಣೆ",
      symptomFallingAsleep: "ನಿದ್ರೆ ಬರಲು ತೊಂದರೆ", symptomWaking: "ರಾತ್ರಿಯಲ್ಲಿ ಪದೇಪದೇ ಎಚ್ಚರವಾಗುವುದು", symptomUnrefreshed: "ನಿದ್ರೆಯ ನಂತರವೂ ದಣಿದ ಅನುಭವ",
      durationLabel: "ಈ ಲಕ್ಷಣಗಳನ್ನು ಎಷ್ಟು ಸಮಯದಿಂದ ಗಮನಿಸಿದ್ದೀರಿ?", severityLabel: "ಇವು ನಿಮ್ಮ ಮೇಲೆ ಎಷ್ಟು ಪರಿಣಾಮ ಬೀರುತ್ತವೆ?",
      feature1Title: "ದೈನಂದಿನ ಸರಳ ಭಾಷೆ", feature1Copy: "ನಿಮಗೆ ಹೇಗನಿಸುತ್ತದೆ ಎಂದು ಸಹಜವಾಗಿ ವಿವರಿಸಿ. ವೈದ್ಯಕೀಯ ಪದಗಳ ಅಗತ್ಯವಿಲ್ಲ.", feature2Title: "ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡ", feature2Copy: "ನಿಮಗೆ ಹೆಚ್ಚು ಅನುಕೂಲವಾದ ಭಾಷೆಯನ್ನು ಬಳಸಿ.", feature3Title: "PCOS ಕುರಿತ ಮಾಹಿತಿ", feature3Copy: "ಲಕ್ಷಣಗಳು PCOS ಜೊತೆಗೆ—ಮತ್ತು ಇತರ ಕಾರಣಗಳೊಂದಿಗೂ—ಹೇಗೆ ಸಂಬಂಧಿಸಿರಬಹುದು ತಿಳಿಯಿರಿ.", feature4Title: "ವೈದ್ಯರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುವ ಸಾರಾಂಶ", feature4Copy: "ನಿಮ್ಮ ಮುಂದಿನ ಆರೈಕೆ ಮಾತುಕತೆಗೆ ಲಕ್ಷಣಗಳು ಮತ್ತು ಪ್ರಶ್ನೆಗಳನ್ನು ಕೊಂಡೊಯ್ಯಿರಿ.",
      checkerEyebrow: "ನಿಮ್ಮ ಖಾಸಗಿ ಆರೋಗ್ಯ ವಿಚಾರಣೆ", checkerTitle: "ನೀವು ಗಮನಿಸಿದ<br>ವಿಷಯಗಳಿಂದ ಆರಂಭಿಸೋಣ.", checkerCopy: "ತಪ್ಪು ಪದಗಳೆಂಬುದಿಲ್ಲ. ನಿಮಗೆ ಇಷ್ಟವಾದಷ್ಟು ಹಂಚಿಕೊಳ್ಳಿ. ನಿಮ್ಮ ಉತ್ತರಗಳು ಈ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಇರುತ್ತವೆ; ಎಲ್ಲಿಗೂ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ.", reassurance: "ಇದು ಮಾಹಿತಿ ನೀಡುವ ಸಾಧನ, ರೋಗನಿರ್ಣಯವಲ್ಲ. ನಿಮ್ಮ ದೇಹವನ್ನು ನೀವು ಚೆನ್ನಾಗಿ ಅರಿತಿದ್ದೀರಿ.",
      examplesTitle: "ಏನು ಬರೆಯಬೇಕೆಂದು ತಿಳಿಯುತ್ತಿಲ್ಲವೇ?", examplesCopy: "ಹೀಗೆ ಪ್ರಯತ್ನಿಸಿ: “ಕೆಲವು ತಿಂಗಳುಗಳಿಂದ ನನ್ನ ಮಾಸಿಕ ಅನಿಯಮಿತವಾಗಿದೆ ಮತ್ತು ನನಗೆ ದಣಿವಾಗುತ್ತಿದೆ.”", useExample: "ಈ ಉದಾಹರಣೆ ಬಳಸಿ", stepLabel: "ನಿಮ್ಮ ಆರೋಗ್ಯ ವಿಚಾರಣೆ", formTitle: "ಏನಾಗುತ್ತಿದೆ ಎಂದು ತಿಳಿಸಿ", requiredNote: "ಕನಿಷ್ಠ ಒಂದು ಲಕ್ಷಣ ಹಂಚಿಕೊಳ್ಳುವುದು ಮಾತ್ರ ಕಡ್ಡಾಯ; ಉಳಿದೆಲ್ಲ ಪ್ರಶ್ನೆಗಳು ಐಚ್ಛಿಕ.",
      describeLabel: "ನೀವು ಗಮನಿಸಿದುದನ್ನು ವಿವರಿಸಿ", describePlaceholder: "ಉದಾಹರಣೆಗೆ: ನನ್ನ ಮಾಸಿಕ ಅನಿಯಮಿತವಾಗಿದೆ ಮತ್ತು ಆಗಾಗ್ಗೆ ದಣಿವಾಗುತ್ತದೆ.", selectSymptoms: "ಅಥವಾ ಲಕ್ಷಣಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      symptoms: ["ಅನಿಯಮಿತ ಮಾಸಿಕ", "ಮೊಡವೆ", "ಕೂದಲು ತೆಳುವಾಗುವುದು ಅಥವಾ ಉದುರುವುದು", "ಮುಖ ಅಥವಾ ದೇಹದಲ್ಲಿ ಹೆಚ್ಚು ಕೂದಲು", "ದಣಿವು ಅಥವಾ ಶಕ್ತಿ ಕಡಿಮೆ", "ತೂಕದ ಬದಲಾವಣೆ", "ತೀವ್ರ ಶ್ರೋಣಿಯ ನೋವು", "ಅತಿ ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವ", "ಮೂರ್ಛೆ"],
      durationLabel: "ಇದನ್ನು ಎಷ್ಟು ಸಮಯದಿಂದ ಗಮನಿಸಿದ್ದೀರಿ?", chooseOption: "ಒಂದು ಆಯ್ಕೆ ಮಾಡಿ", durationDays: "ಕೆಲವು ದಿನಗಳು", durationWeeks: "ಕೆಲವು ವಾರಗಳು", durationMonths: "ಕೆಲವು ತಿಂಗಳುಗಳು", durationLonger: "6 ತಿಂಗಳಿಗಿಂತ ಹೆಚ್ಚು", durationUnsure: "ಖಚಿತವಿಲ್ಲ",
      severityLabel: "ಇದು ನಿಮ್ಮ ಮೇಲೆ ಎಷ್ಟು ಪರಿಣಾಮ ಬೀರುತ್ತದೆ?", severityMild: "ಸ್ವಲ್ಪ", severityModerate: "ಮಧ್ಯಮವಾಗಿ", severitySevere: "ತುಂಬಾ",
      followupTitle: "ಇನ್ನೆರಡು ವಿವರಗಳು (ಐಚ್ಛಿಕ)", periodQuestion: "ಅನ್ವಯಿಸಿದರೆ, ನಿಮ್ಮ ಮಾಸಿಕದಲ್ಲಿ ಯಾವ ಬದಲಾವಣೆಗಳಾಗಿವೆ?", preferNot: "ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಬಿಟ್ಟುಬಿಡಿ", periodIrregular: "ಅನಿರೀಕ್ಷಿತ ಸಮಯದಲ್ಲಿ ಬರುತ್ತದೆ", periodMissed: "ಮಾಸಿಕ ತಪ್ಪಿಹೋಗಿದೆ", periodHeavy: "ಸಾಮಾನ್ಯಕ್ಕಿಂತ ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವ", periodPainful: "ಹೆಚ್ಚು ನೋವು", periodNoChange: "ಬದಲಾವಣೆ ಇಲ್ಲ / ಅನ್ವಯಿಸುವುದಿಲ್ಲ", impactQuestion: "ಈ ಲಕ್ಷಣಗಳು ದೈನಂದಿನ ಜೀವನದ ಮೇಲೆ ಎಷ್ಟು ಪರಿಣಾಮ ಬೀರುತ್ತವೆ?", impactLow: "ಹೆಚ್ಚಿಲ್ಲ", impactSome: "ಕೆಲವು ದಿನಗಳು", impactOften: "ಆಗಾಗ್ಗೆ",
      submitButton: "ನನ್ನ ಲಕ್ಷಣಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ", localOnly: "ನಿಮ್ಮ ಉತ್ತರಗಳು ಈ ಸಾಧನದಲ್ಲೇ ಸಂಸ್ಕರಿಸಲ್ಪಡುತ್ತವೆ.", validation: "ಮುಂದುವರಿಯಲು ಕನಿಷ್ಠ ಒಂದು ಲಕ್ಷಣವನ್ನು ವಿವರಿಸಿ ಅಥವಾ ಆಯ್ಕೆಮಾಡಿ.",
      resultsEyebrow: "ನಿಮ್ಮ ಲಕ್ಷಣಗಳ ಸಾರಾಂಶ", resultsTitle: "ನೀವು ಹಂಚಿಕೊಂಡದ್ದು ಇಲ್ಲಿದೆ.", resultsIntro: "ಇದು ನೀವು ಹಂಚಿಕೊಂಡ ಮಾಹಿತಿಯ ಶೈಕ್ಷಣಿಕ ಸಾರಾಂಶ; ರೋಗನಿರ್ಣಯವಲ್ಲ. ಲಕ್ಷಣಗಳಿಗೆ ಹಲವು ವಿಭಿನ್ನ ಕಾರಣಗಳಿರಬಹುದು.",
      urgentTitleResult: "ದಯವಿಟ್ಟು ತುರ್ತು ವೈದ್ಯಕೀಯ ಆರೈಕೆ ಪಡೆಯಿರಿ", urgentCopyResult: "ತಕ್ಷಣ ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿರಬಹುದಾದ ಲಕ್ಷಣವನ್ನು ನೀವು ತಿಳಿಸಿದ್ದೀರಿ. ದಯವಿಟ್ಟು ಸ್ಥಳೀಯ ತುರ್ತು ಸೇವೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ ಅಥವಾ ಹತ್ತಿರದ ತುರ್ತು ಚಿಕಿತ್ಸಾ ವಿಭಾಗಕ್ಕೆ ಈಗಲೇ ತೆರಳಿ—ವಿಶೇಷವಾಗಿ ಲಕ್ಷಣ ತೀವ್ರವಾಗಿದ್ದರೆ, ಹೆಚ್ಚಾಗುತ್ತಿದ್ದರೆ ಅಥವಾ ನಿಮಗೆ ಮೂರ್ಛೆ/ಅಸ್ವಸ್ಥತೆ ಅನಿಸಿದರೆ. ಈ ಸಾಧನದ ಮೌಲ್ಯಮಾಪನಕ್ಕಾಗಿ ಕಾಯಬೇಡಿ.",
      routineTitleResult: "ಆರೋಗ್ಯ ವೃತ್ತಿಪರರ ಭೇಟಿಯನ್ನು ಏರ್ಪಡಿಸಿ", routineCopyResult: "ಈ ಲಕ್ಷಣಗಳು ಮುಂದುವರಿದರೆ, ಬದಲಾಗುತ್ತಿದ್ದರೆ ಅಥವಾ ನಿಮಗೆ ಚಿಂತೆಯಾದರೆ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರೊಂದಿಗೆ ಸಾಮಾನ್ಯ ಭೇಟಿಯನ್ನು ಏರ್ಪಡಿಸಿ.",
      identifiedTitle: "ನೀವು ತಿಳಿಸಿದ ಲಕ್ಷಣಗಳು", noneRecognized: "ನಿರ್ದಿಷ್ಟ ಲಕ್ಷಣದ ಹೆಸರನ್ನು ಗುರುತಿಸಲಾಗಲಿಲ್ಲ; ಆದರೆ ನಿಮ್ಮ ವಿವರಣೆ ವರದಿಯಲ್ಲಿ ಇದೆ. ಅದನ್ನು ಅರಿಯಲು ಆರೋಗ್ಯ ವೃತ್ತಿಪರರು ಸಹಾಯ ಮಾಡಬಹುದು.",
      pcosTitle: "ಇದು ಯಾವುದಕ್ಕೆ ಸಂಬಂಧಿಸಿರಬಹುದು", pcosCopy: "ನೀವು ತಿಳಿಸಿದ ಕೆಲವು ಲಕ್ಷಣಗಳು—ಉದಾಹರಣೆಗೆ ಅನಿಯಮಿತ ಮಾಸಿಕ, ಮೊಡವೆ ಅಥವಾ ಕೂದಲು ಬೆಳವಣಿಗೆಯ ಬದಲಾವಣೆ—ಪಾಲಿಸಿಸ್ಟಿಕ್ ಓವರಿ ಸಿಂಡ್ರೋಮ್ (PCOS) ಜೊತೆಗೆ ಕಾಣಿಸಿಕೊಳ್ಳಬಹುದು. ಇವುಗಳಲ್ಲಿ ಒಂದು ಅಥವಾ ಹೆಚ್ಚು ಲಕ್ಷಣಗಳಿರುವುದರಿಂದ ನಿಮಗೆ PCOS ಇದೆ ಎಂದರ್ಥವಲ್ಲ. ಅರ್ಹ ವೈದ್ಯರು ಮಾತ್ರ ನಿಮ್ಮ ಆರೋಗ್ಯವನ್ನು ಒಟ್ಟಾರೆ ಪರಿಶೀಲಿಸಬಹುದು; ಈ ಸಾಧನವು ಸಾಧ್ಯತೆಯನ್ನು ಅಂದಾಜಿಸುವುದಿಲ್ಲ.",
      alternativesTitle: "ಇತರ ಸಾಧ್ಯ ಕಾರಣಗಳು", alternativesCopy: "ಇದೇ ರೀತಿಯ ಲಕ್ಷಣಗಳಿಗೆ ಒತ್ತಡ, ನಿದ್ರೆ ಅಥವಾ ದಿನಚರಿಯ ಬದಲಾವಣೆ, ಥೈರಾಯ್ಡ್ ಸಮಸ್ಯೆಗಳು, ಇತರ ಹಾರ್ಮೋನ್ ಬದಲಾವಣೆಗಳು, ಔಷಧಿಗಳು ಅಥವಾ ಇನ್ನಿತರ ಆರೋಗ್ಯ ಕಾರಣಗಳೂ ಇರಬಹುದು. ಸಂಬಂಧಿತ ಸಾಧ್ಯತೆಗಳು ನಿಮ್ಮ ಆರೋಗ್ಯ ಇತಿಹಾಸ ಮತ್ತು ಪರಿಸ್ಥಿತಿಯನ್ನು ಅವಲಂಬಿಸಿರುತ್ತವೆ.",
      commonTitle: "PCOS: ಸಂಕ್ಷಿಪ್ತ ಮಾಹಿತಿ", commonCopy: "PCOS ಎಂಬುದು ಹಾರ್ಮೋನ್ ಮತ್ತು ಚಯಾಪಚಯ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಒಳಗೊಂಡ ಆರೋಗ್ಯ ಸ್ಥಿತಿ. ಅನುಭವಗಳು ವ್ಯಕ್ತಿಯಿಂದ ವ್ಯಕ್ತಿಗೆ ಬದಲಾಗುತ್ತವೆ. ಹೆಚ್ಚಿನ ಪರಿಶೀಲನೆ ಅಗತ್ಯವೇ ಎಂದು ನಿರ್ಧರಿಸುವಾಗ ವೈದ್ಯರು ಮಾಸಿಕದ ಇತಿಹಾಸ, ಲಕ್ಷಣಗಳು, ಪರೀಕ್ಷೆ ಮತ್ತು ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆಗಳನ್ನು ಪರಿಗಣಿಸಬಹುದು. ಒಂದೇ ಒಂದು ಲಕ್ಷಣದಿಂದ ರೋಗನಿರ್ಣಯ ಸಾಧ್ಯವಿಲ್ಲ.",
      doctorTitle: "ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಕೇಳಬಹುದಾದ ಪ್ರಶ್ನೆಗಳು", doctorQ1: "ಈ ಲಕ್ಷಣಗಳಿಗೆ ಏನು ಕಾರಣವಾಗಿರಬಹುದು ಮತ್ತು ಇನ್ನೇನು ಪರಿಗಣಿಸಬೇಕು?", doctorQ2: "ನನಗೆ ಯಾವುದೇ ಪರೀಕ್ಷೆ ಅಥವಾ ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷೆ ಅಗತ್ಯವಿದೆಯೇ?", doctorQ3: "ಯಾವ ಬದಲಾವಣೆ ಅಥವಾ ಎಚ್ಚರಿಕೆಯ ಲಕ್ಷಣ ಕಂಡರೆ ಬೇಗ ಆರೈಕೆ ಪಡೆಯಬೇಕು?",
      reportTitle: "ವೈದ್ಯರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುವ ಸಾರಾಂಶ", reportDate: "ವರದಿ ದಿನಾಂಕ", reportLanguage: "ಭಾಷೆ", reportSymptoms: "ತಿಳಿಸಿದ ಲಕ್ಷಣಗಳು", reportDuration: "ಅವಧಿ", reportSeverity: "ಪರಿಣಾಮ", reportFollowup: "ನಿಮ್ಮ ಉತ್ತರಗಳು", reportDescription: "ನಿಮ್ಮ ವಿವರಣೆ", reportNotProvided: "ತಿಳಿಸಿಲ್ಲ", reportQuestions: "ಚರ್ಚಿಸಬೇಕಾದ ಪ್ರಶ್ನೆಗಳು", noSymptomsListed: "ಲಕ್ಷಣದ ಹೆಸರು ಗುರುತಿಸಲಾಗಿಲ್ಲ; ಮೇಲಿನ ವಿವರಣೆಯನ್ನು ನೋಡಿ.", periodAnswer: "ಮಾಸಿಕದ ಬದಲಾವಣೆ", impactAnswer: "ದೈನಂದಿನ ಜೀವನದ ಮೇಲಿನ ಪರಿಣಾಮ",
      printButton: "ಮುದ್ರಿಸಿ / PDF ಉಳಿಸಿ", restartButton: "ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ", disclaimer: "ಮುಖ್ಯ: Yajnaseni ಮಾಹಿತಿಗಾಗಿ ಮತ್ತು ಸಿದ್ಧತೆಗಾಗಿ ಮಾತ್ರ. ಇದು PCOS ಅಥವಾ ಬೇರೆ ಸ್ಥಿತಿಯನ್ನು ಪತ್ತೆಹಚ್ಚಲು/ತಳ್ಳಿಹಾಕಲು, ಔಷಧಿ ಸೂಚಿಸಲು ಅಥವಾ ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಆರೈಕೆಗೆ ಪರ್ಯಾಯವಾಗಲು ಸಾಧ್ಯವಿಲ್ಲ. ತುರ್ತು ನಿರ್ಧಾರಗಳಿಗಾಗಿ ಇದನ್ನು ಬಳಸಬೇಡಿ.",
      careEyebrow: "ನಿಮ್ಮ ಆರೋಗ್ಯವೇ ಮೊದಲ ಆದ್ಯತೆ", careTitle: "ಯಾವಾಗ ಸಹಾಯ ಪಡೆಯಬೇಕು ತಿಳಿಯಿರಿ.", careIntro: "ಲಕ್ಷಣಗಳು ಹೊಸದಾಗಿದ್ದರೆ, ಮುಂದುವರಿದರೆ, ಬದಲಾಗುತ್ತಿದ್ದರೆ ಅಥವಾ ನಿಮ್ಮನ್ನು ಚಿಂತೆಗೆಡುಸಿದರೆ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರು ಕಾರಣ ತಿಳಿಯಲು ಸಹಾಯ ಮಾಡಬಹುದು.",
      routineTitle: "ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ ಭೇಟಿ ಏರ್ಪಡಿಸಿ", routineCopy: "ಮಾಸಿಕ ನಿರಂತರವಾಗಿ ಅನಿಯಮಿತವಾಗಿದ್ದರೆ ಅಥವಾ ತಪ್ಪಿಹೋಗುತ್ತಿದ್ದರೆ, ಅಥವಾ ಮೊಡವೆ, ಕೂದಲು ಬದಲಾವಣೆ, ದಣಿವು ಅಥವಾ ತೂಕದ ಬದಲಾವಣೆಗಳು ಚಿಂತೆಯಾಗಿದ್ದರೆ ಭೇಟಿಯನ್ನು ಏರ್ಪಡಿಸಿ. ನಿಮ್ಮ ಇತಿಹಾಸ ಮತ್ತು ಸೂಕ್ತ ಪರಿಶೀಲನೆ ಬಗ್ಗೆ ವೈದ್ಯರೊಂದಿಗೆ ಚರ್ಚಿಸಿ.",
      urgentTitle: "ತುರ್ತು ವೈದ್ಯಕೀಯ ಸಹಾಯ ಪಡೆಯಿರಿ", urgentCopy: "ತೀವ್ರ ಶ್ರೋಣಿಯ ಅಥವಾ ಹೊಟ್ಟೆ ನೋವು, ಮೂರ್ಛೆ ಅಥವಾ ಅತಿ ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವವಿದ್ದರೆ—ವಿಶೇಷವಾಗಿ ದೌರ್ಬಲ್ಯ, ತಲೆಸುತ್ತು ಅಥವಾ ಅಸ್ವಸ್ಥತೆ ಇದ್ದರೆ—ತಕ್ಷಣ ತುರ್ತು ಆರೈಕೆ ಪಡೆಯಿರಿ. ಲಕ್ಷಣ ತೀವ್ರವಾಗಿದ್ದರೆ ಅಥವಾ ತಕ್ಷಣದ ಅಪಾಯವಿದ್ದರೆ ಸ್ಥಳೀಯ ತುರ್ತು ಸೇವೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      careNote: "Yajnaseni ರೋಗನಿರ್ಣಯ ಮಾಡುವುದಿಲ್ಲ, ಔಷಧಿ ಸೂಚಿಸುವುದಿಲ್ಲ ಮತ್ತು ಅರ್ಹ ವೃತ್ತಿಪರರ ಆರೈಕೆಗೆ ಪರ್ಯಾಯವಲ್ಲ. ಈ ಸಾಧನದ ಕಾರಣದಿಂದ ತುರ್ತು ಆರೈಕೆಯನ್ನು ವಿಳಂಬ ಮಾಡಬೇಡಿ.",
      footerText: "ನಿಮ್ಮ ಆರೋಗ್ಯದ ಮಾತುಕತೆಗೆ ಒಂದು ಆತ್ಮೀಯ ಆರಂಭ.", footerPrivacy: "ಖಾತೆ ಇಲ್ಲ · ಮಾಹಿತಿ ಸಂಗ್ರಹವಿಲ್ಲ", examplePeriod: "ನನ್ನ ಮಾಸಿಕ ಅನಿರೀಕ್ಷಿತ ಸಮಯದಲ್ಲಿ ಬರುತ್ತಿದೆ.", exampleSkin: "ನನಗೆ ಮೊಡವೆ ಇದೆ ಮತ್ತು ಹೆಚ್ಚು ಕೂದಲು ಉದುರುತ್ತಿರುವುದನ್ನು ಗಮನಿಸಿದ್ದೇನೆ."
    }
  };

  const symptomCategories = [
    { id: "menstrual", label: "catMenstrual", icon: "calendar" },
    { id: "hormonal", label: "catHormonal", icon: "hormone" },
    { id: "skin", label: "catSkin", icon: "sparkle" },
    { id: "mood", label: "catMood", icon: "heart" },
    { id: "body", label: "catBody", icon: "energy" },
    { id: "sleep", label: "catSleep", icon: "moon" }
  ];

  const symptomTerms = [
    { id: "period-pain", categories: ["menstrual"], en: "Period pain or cramps", kn: "ಮಾಸಿಕದ ನೋವು ಅಥವಾ ಸೆಳೆತ", key: "symptomPeriodPain", icon: "cramp", aliases: ["period pain", "cramps", "menstrual cramps", "painful periods", "ಮಾಸಿಕ ನೋವು", "ಸೆಳೆತ"] },
    { id: "irregular-periods", categories: ["menstrual"], en: "Irregular periods", kn: "ಅನಿಯಮಿತ ಮಾಸಿಕ", key: "symptomIrregularPeriods", icon: "calendar", aliases: ["irregular period", "periods are irregular", "unpredictable period", "periods are unpredictable", "late period", "missed period", "irregular menstruation", "ಮಾಸಿಕ ಸರಿಯಾಗಿ ಬರುತ್ತಿಲ್ಲ", "ತಿಂಗಳು ಸರಿಯಾಗಿ ಬರುತ್ತಿಲ್ಲ", "ತಿಂಗಳು ಸರಿಯಾಗಿ ಬರ್ತಿಲ್ಲ", "ಪಿರಿಯಡ್ಸ್ ಸರಿಯಾಗಿ ಬರುತ್ತಿಲ್ಲ"] },
    { id: "heavy-bleeding", categories: ["menstrual"], en: "Heavy bleeding", kn: "ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವ", key: "symptomHeavyBleeding", icon: "drop", urgent: true, aliases: ["very heavy bleeding", "heavy period", "heavy periods", "soaking pads", "bleeding heavily", "ಅತಿ ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವ", "ತುಂಬಾ ರಕ್ತಸ್ರಾವ", "ಹೆಚ್ಚು ರಕ್ತಸ್ರಾವ"] },
    { id: "missed-periods", categories: ["menstrual"], en: "Missed periods", kn: "ಮಾಸಿಕ ತಪ್ಪುವುದು", key: "symptomMissedPeriods", icon: "calendar", aliases: ["missed period", "no period", "period stopped", "ಅನಿಯಮಿತ ಮಾಸಿಕ"] },
    { id: "spotting", categories: ["menstrual"], en: "Spotting between periods", kn: "ಮಾಸಿಕಗಳ ಮಧ್ಯೆ ಚುಕ್ಕೆ ರಕ್ತಸ್ರಾವ", key: "symptomSpotting", icon: "drop", aliases: ["spotting", "bleeding between periods", "intermenstrual bleeding"] },
    { id: "premenstrual-symptoms", categories: ["menstrual"], en: "Premenstrual symptoms", kn: "ಮಾಸಿಕಪೂರ್ವ ಲಕ್ಷಣಗಳು", key: "symptomPms", icon: "calendar", aliases: ["pms", "pre menstrual", "before my period", "before period"] },
    { id: "acne", categories: ["hormonal", "skin"], en: "Acne or breakouts", kn: "ಮೊಡವೆ ಅಥವಾ ಚರ್ಮದ ಗುಳ್ಳೆಗಳು", key: "symptomBreakouts", icon: "sparkle", aliases: ["acne", "pimples", "breakouts", "ಮೊಡವೆ", "ಮುಖದಲ್ಲಿ ಮೊಡವೆ"] },
    { id: "hair-fall", categories: ["hormonal"], en: "Hair fall", kn: "ಕೂದಲು ಉದುರುವುದು", key: "symptomHairFall", icon: "hair", aliases: ["hair loss", "hair falling", "hair shedding", "hair is falling", "ಕೂದಲು ಉದುರುತ್ತಿದೆ", "ಕೂದಲು ಉದುರುವುದು"] },
    { id: "facial-hair", categories: ["hormonal"], en: "Unusual facial hair growth", kn: "ಮುಖದ ಮೇಲೆ ಅಸಾಮಾನ್ಯ ಕೂದಲು ಬೆಳವಣಿಗೆ", key: "symptomFacialHair", icon: "face", aliases: ["facial hair", "more hair on my face", "excess hair", "unwanted hair", "ಮుఖದಲ್ಲಿ ಹೆಚ್ಚು ಕೂದಲು", "ಮುಖದ ಮೇಲೆ ಕೂದಲು", "ದೇಹದಲ್ಲಿ ಹೆಚ್ಚು ಕೂದಲು"] },
    { id: "weight-changes", categories: ["hormonal"], en: "Weight changes", kn: "ತೂಕದ ಬದಲಾವಣೆ", key: "symptomWeightChanges", icon: "scale", aliases: ["weight gain", "weight loss", "gaining weight", "losing weight", "weight has changed", "ತೂಕ ಹೆಚ್ಚಾಗಿದೆ", "ತೂಕ ಕಡಿಮೆಯಾಗಿದೆ", "ತೂಕದ ಬದಲಾವಣೆ"] },
    { id: "hot-flashes", categories: ["hormonal"], en: "Hot flashes", kn: "ಹಠಾತ್ ಬಿಸಿ ಅನುಭವ", key: "symptomHotFlashes", icon: "sun", aliases: ["hot flushes", "sudden warmth", "night sweats"] },
    { id: "libido-changes", categories: ["hormonal"], en: "Changes in libido", kn: "ಲೈಂಗಿಕ ಆಸಕ್ತಿಯಲ್ಲಿ ಬದಲಾವಣೆ", key: "symptomLibido", icon: "heart", aliases: ["libido", "sex drive", "sexual desire"] },
    { id: "hair-thinning", categories: ["skin"], en: "Hair thinning", kn: "ಕೂದಲು ತೆಳುವಾಗುವುದು", key: "symptomHairThinning", icon: "hair", aliases: ["hair thinning", "thinning hair", "ಕೂದಲು ತೆಳುವಾಗುತ್ತಿದೆ"] },
    { id: "hair-shedding", categories: ["skin"], en: "Excessive hair shedding", kn: "ಅತಿಯಾಗಿ ಕೂದಲು ಉದುರುವುದು", key: "symptomHairShedding", icon: "hair", aliases: ["excessive hair loss", "excess hair shedding", "shedding hair"] },
    { id: "dry-skin", categories: ["skin"], en: "Dry skin", kn: "ಒಣ ಚರ್ಮ", key: "symptomDrySkin", icon: "sun", aliases: ["dryness", "ಚರ್ಮ ಒಣ"] },
    { id: "skin-changes", categories: ["skin"], en: "Unusual skin changes", kn: "ಅಸಾಮಾನ್ಯ ಚರ್ಮದ ಬದಲಾವಣೆಗಳು", key: "symptomSkinChanges", icon: "skin", aliases: ["skin changes", "skin darkening", "skin texture", "unusual skin"] },
    { id: "mood-swings", categories: ["mood"], en: "Mood swings", kn: "ಮನಸ್ಥಿತಿಯ ಏರಿಳಿತ", key: "symptomMoodSwings", icon: "heart", aliases: ["mood swings", "mood changes", "ಮನಸ್ಥಿತಿ ಬದಲಾವಣೆ"] },
    { id: "anxiety", categories: ["mood"], en: "Anxiety or persistent worry", kn: "ಆತಂಕ ಅಥವಾ ನಿರಂತರ ಚಿಂತೆ", key: "symptomAnxiety", icon: "mind", aliases: ["anxiety", "worried", "worrying", "persistent worry", "ಆತಂಕ", "ಚಿಂತೆ"] },
    { id: "low-mood", categories: ["mood"], en: "Low mood", kn: "ಖಿನ್ನ ಮನಸ್ಥಿತಿ", key: "symptomLowMood", icon: "cloud", aliases: ["low mood", "feeling down", "sadness", "ಖಿನ್ನ"] },
    { id: "irritability", categories: ["mood"], en: "Irritability", kn: "ಕಿರಿಕಿರಿ", key: "symptomIrritability", icon: "flame", aliases: ["irritable", "irritated", "short tempered"] },
    { id: "concentration", categories: ["mood"], en: "Difficulty concentrating", kn: "ಗಮನ ಕೇಂದ್ರೀಕರಿಸಲು ತೊಂದರೆ", key: "symptomConcentration", icon: "mind", aliases: ["concentration", "concentrating", "focus", "brain fog"] },
    { id: "fatigue", categories: ["body", "sleep"], en: "Fatigue or low energy", kn: "ದಣಿವು ಅಥವಾ ಶಕ್ತಿ ಕಡಿಮೆ", key: "symptomFatigue", icon: "battery", aliases: ["fatigue", "tired", "tiredness", "low energy", "exhausted", "feeling tired", "ದಣಿವು", "ಆಯಾಸ", "ಸುಸ್ತು", "ಶಕ್ತಿ ಕಡಿಮೆ"] },
    { id: "headaches", categories: ["body"], en: "Headaches", kn: "ತಲೆನೋವು", key: "symptomHeadaches", icon: "headache", aliases: ["headache", "migraine", "ತಲೆನೋವು"] },
    { id: "bloating", categories: ["body"], en: "Bloating", kn: "ಹೊಟ್ಟೆ ಉಬ್ಬರ", key: "symptomBloating", icon: "belly", aliases: ["bloated", "abdominal bloating", "ಉಬ್ಬರ"] },
    { id: "breast-tenderness", categories: ["body"], en: "Breast tenderness", kn: "ಸ್ತನಗಳಲ್ಲಿ ನೋವು ಅಥವಾ ಸೂಕ್ಷ್ಮತೆ", key: "symptomBreastTenderness", icon: "breast", aliases: ["sore breasts", "breast pain", "tender breasts", "ಸ್ತನ ನೋವು"] },
    { id: "pelvic-discomfort", categories: ["body"], en: "Pelvic discomfort", kn: "ಶ್ರೋಣಿಯ ಅಸ್ವಸ್ಥತೆ", key: "symptomPelvicDiscomfort", icon: "pelvis", aliases: ["pelvic discomfort", "pelvic pain", "ತೊಡೆಯ ನಡುವಿನ ನೋವು"] },
    { id: "severe-pelvic-pain", categories: ["body"], en: "Severe pelvic pain", kn: "ತೀವ್ರ ಶ್ರೋಣಿಯ ನೋವು", icon: "pelvis", urgent: true, aliases: ["severe pelvic pain", "severe abdominal pain", "severe lower abdominal pain", "intense pelvic pain", "very bad pelvic pain", "ತೀವ್ರ ಶ್ರೋಣಿಯ ನೋವು", "ತೀವ್ರ ಹೊಟ್ಟೆ ನೋವು", "ತೀವ್ರ ಹೊಟ್ಟೆನೋವು"] },
    { id: "appetite-changes", categories: ["body", "sleep"], en: "Appetite changes", kn: "ಹಸಿವಿನಲ್ಲಿ ಬದಲಾವಣೆ", key: "symptomAppetiteChanges", icon: "meal", aliases: ["appetite", "eating more", "eating less", "hunger changes", "ಹಸಿವು"] },
    { id: "fainting", categories: ["body"], en: "Fainting or feeling faint", kn: "ಮೂರ್ಛೆ ಅಥವಾ ಮೂರ್ಛೆ ಬರುವ ಅನುಭವ", icon: "energy", urgent: true, aliases: ["fainting", "fainted", "passed out", "feel faint", "ಮೂರ್ಛೆ", "ಮೂರ್ಛೆ ಹೋಯಿತು"] },
    { id: "difficulty-falling-asleep", categories: ["sleep"], en: "Difficulty falling asleep", kn: "ನಿದ್ರೆ ಬರಲು ತೊಂದರೆ", key: "symptomFallingAsleep", icon: "moon", aliases: ["insomnia", "trouble sleeping", "can't fall asleep", "cannot sleep"] },
    { id: "waking-at-night", categories: ["sleep"], en: "Waking frequently during the night", kn: "ರಾತ್ರಿಯಲ್ಲಿ ಪದೇಪದೇ ಎಚ್ಚರವಾಗುವುದು", key: "symptomWaking", icon: "bed", aliases: ["waking at night", "wake up at night", "restless sleep", "broken sleep"] },
    { id: "unrefreshed-sleep", categories: ["sleep"], en: "Feeling unrefreshed after sleep", kn: "ನಿದ್ರೆಯ ನಂತರವೂ ದಣಿದ ಅನುಭವ", key: "symptomUnrefreshed", icon: "moon", aliases: ["unrefreshed", "not rested", "tired after sleep"] }
  ];

  const categoryIcons = {
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="15" rx="2"></rect><path d="M8 3v6m8-6v6M4 11h16m-7 5 2 2 4-4"></path></svg>',
    hormone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"></rect><path d="m7 14 3-3 3 3 4-5"></path></svg>',
    sparkle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c1.2 5.2 3.8 7.8 9 9-5.2 1.2-7.8 3.8-9 9-1.2-5.2-3.8-7.8-9-9 5.2-1.2 7.8-3.8 9-9Z"></path><circle cx="19" cy="5" r="2"></circle></svg>',
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5-8.8 11-8.8 11s-8.8-6-8.8-11a4.8 4.8 0 0 1 8.8-2.6 4.8 4.8 0 0 1 8.8 2.6Z"></path></svg>',
    energy: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z"></path></svg>',
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"></path><path d="m16.5 4 .7 1.8L19 6.5l-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z"></path></svg>'
  };
  const symptomIcons = {
    cramp: categoryIcons.hormone,
    calendar: categoryIcons.calendar,
    drop: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3C9.5 7.2 6 10.7 6 14.5a6 6 0 0 0 12 0C18 10.7 14.5 7.2 12 3Z"></path></svg>',
    sparkle: categoryIcons.sparkle,
    hair: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10a3 3 0 0 1 0 6H6m-2 4h11a3 3 0 0 0 0-6m6-7v14"></path></svg>',
    face: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M5 21c.4-4 3-6 7-6s6.6 2 7 6"></path></svg>',
    scale: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M5 6h14M7 6l-3 7h6L7 6Zm10 0-3 7h6l-3-7ZM7 21h10"></path></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>',
    heart: categoryIcons.heart,
    skin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8V4h4m8 0h4v4m0 8v4h-4m-8 0H4v-4"></path></svg>',
    mind: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5 3 3 0 0 0 5 2V5a3 3 0 0 0-3-1Zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5 3 3 0 0 1-5 2M8 9h2m-3 5h3m6-5h-2m3 5h-3"></path></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9a4.5 4.5 0 0 0 1 9Z"></path></svg>',
    flame: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 3c1 5-4 6-2 10 1-2 3-2 4-5 4 4 5 7 3 11a7 7 0 0 1-13-3c0-4 3-7 5-9 0 3 1 4 2 5"></path></svg>',
    battery: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="17" height="10" rx="2"></rect><path d="M22 10v4m-15-4v4"></path></svg>',
    headache: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5 3 3 0 0 0 5 2V5a3 3 0 0 0-3-1Zm6 0a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5 3 3 0 0 1-5 2M8 9h2m6 0h-2m-5 5h6"></path></svg>',
    belly: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4c-2 2-3 5-3 9a7 7 0 0 0 14 0c0-4-1-7-3-9m-8 8a4 4 0 0 0 8 0"></path></svg>',
    breast: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h5l2-3 3 6 2-3h4"></path><path d="M12 21 4 13a5 5 0 0 1 8-6 5 5 0 0 1 8 6l-8 8Z"></path></svg>',
    pelvis: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5c0 5 2 7 7 7s7-2 7-7M5 5c-2 4-1 10 3 12l4-2 4 2c4-2 5-8 3-12m-7 10v6"></path></svg>',
    meal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3v7m3-7v7m-6-3h6m-3 3v11m12-18v18m0-18c4 0 5 4 5 8h-5"></path></svg>',
    moon: categoryIcons.moon,
    bed: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 19V5m0 10h18v4M7 11h4a3 3 0 0 1 3 3H7v-3Zm7 0h4a3 3 0 0 1 3 3h-7v-3Z"></path></svg>',
    custom: categoryIcons.sparkle
  };

  const state = { language: "en", report: null, category: "menstrual", search: "", selections: new Map(), customSymptoms: [], customCounter: 0, step: 1 };
  const form = document.getElementById("symptom-form");
  const results = document.getElementById("results");
  const diagnosisLink = document.getElementById("diagnosis-link");
  const featureDiagnosisLink = document.getElementById("feature-diagnosis-link");
  const textInput = document.getElementById("symptom-text");
  const errorBox = document.getElementById("form-error");
  const headerMenu = document.getElementById("header-menu");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const resourcesDropdown = document.getElementById("resources-dropdown");
  const resourcesTrigger = document.getElementById("resources-trigger");
  const resourcesMenu = document.getElementById("resources-menu");
  const searchInput = document.getElementById("symptom-search");
  const categoryGrid = document.getElementById("symptom-categories");
  const symptomGrid = document.getElementById("symptom-options");
  const selectedSymptomsList = document.getElementById("selected-symptoms");
  const detailsSelectedList = document.getElementById("details-selected-symptoms");
  const customSymptomInput = document.getElementById("custom-symptom-input");
  const customSymptomError = document.getElementById("custom-symptom-error");
  const normalize = (text) => text.toLocaleLowerCase().replace(/[.,!?;:()[\]{}'"“”‘’]/g, " ").replace(/\s+/g, " ").trim();
  const escapeHtml = (text) => String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

  function itemLabel(item) {
    return item.custom ? item.en : state.language === "kn" ? item.kn : item.en;
  }

  function categoryLabel(categoryId) {
    const category = symptomCategories.find((item) => item.id === categoryId);
    return category ? translations[state.language][category.label] : "";
  }

  function renderCategories() {
    categoryGrid.replaceChildren();
    symptomCategories.forEach((category) => {
      const button = document.createElement("button");
      const count = symptomTerms.filter((item) => item.categories.includes(category.id)).length;
      const active = category.id === state.category && !state.search;
      button.type = "button";
      button.className = `category-tile${active ? " is-active" : ""}`;
      button.dataset.category = category.id;
      button.setAttribute("aria-pressed", String(active));

      const icon = document.createElement("span");
      icon.className = "category-icon";
      icon.innerHTML = categoryIcons[category.icon];
      const label = document.createElement("span");
      label.className = "category-name";
      label.textContent = categoryLabel(category.id);
      const countLabel = document.createElement("span");
      countLabel.className = "category-count";
      countLabel.textContent = translations[state.language].countSymptoms.replace("{count}", String(count));
      const activeMark = document.createElement("span");
      activeMark.className = "category-active-label";
      activeMark.textContent = translations[state.language].categorySelected;
      activeMark.hidden = !active;
      button.append(icon, label, countLabel, activeMark);
      categoryGrid.append(button);
    });
  }

  function renderSelectedList(list, removable) {
    list.replaceChildren();
    state.selections.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className = "selected-chip";
      const name = document.createElement("span");
      name.textContent = itemLabel(item);
      listItem.append(name);
      if (removable) {
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "selected-remove";
        remove.dataset.removeSymptom = item.id;
        remove.setAttribute("aria-label", translations[state.language].removeSymptomLabel.replace("{symptom}", itemLabel(item)));
        remove.textContent = "×";
        listItem.append(remove);
      }
      list.append(listItem);
    });
  }

  function renderSelectionSummary() {
    const count = state.selections.size;
    const t = translations[state.language];
    document.getElementById("selected-count").textContent = count === 0
      ? t.selectedCountZero
      : count === 1 ? t.selectedCountOne : t.selectedCountMany.replace("{count}", String(count));
    document.getElementById("continue-to-details").disabled = count === 0;
    document.getElementById("clear-selection").disabled = count === 0;
    selectedSymptomsList.classList.toggle("is-empty", count === 0);
    if (count === 0) {
      const empty = document.createElement("li");
      empty.className = "selected-empty";
      empty.textContent = t.selectedCountZero;
      selectedSymptomsList.replaceChildren(empty);
    } else {
      renderSelectedList(selectedSymptomsList, true);
    }
    renderSelectedList(detailsSelectedList, false);
  }

  function matchesSearch(item, query) {
    const categories = item.categories.map(categoryLabel).join(" ");
    const terms = [item.en, item.kn, categories, ...(item.aliases || [])];
    return terms.some((term) => normalize(term).includes(query));
  }

  function renderSymptomOptions() {
    const query = normalize(state.search);
    const shown = query
      ? [...symptomTerms, ...state.customSymptoms].filter((item) => matchesSearch(item, query))
      : symptomTerms.filter((item) => item.categories.includes(state.category));
    const heading = document.getElementById("active-category-heading");
    heading.textContent = query ? translations[state.language].searchResults : categoryLabel(state.category);
    document.getElementById("symptom-empty").hidden = shown.length > 0;
    symptomGrid.replaceChildren();
    shown.forEach((item) => {
      const button = document.createElement("button");
      const isSelected = state.selections.has(item.id);
      button.type = "button";
      button.className = `symptom-card${isSelected ? " is-selected" : ""}`;
      button.dataset.symptomId = item.id;
      button.setAttribute("aria-pressed", String(isSelected));
      const icon = document.createElement("span");
      icon.className = "symptom-card-icon";
      icon.innerHTML = symptomIcons[item.icon] || symptomIcons.custom;
      const copy = document.createElement("span");
      copy.className = "symptom-card-copy";
      const label = document.createElement("span");
      label.className = "symptom-card-name";
      label.textContent = itemLabel(item);
      copy.append(label);
      if (query) {
        const resultCategory = document.createElement("span");
        resultCategory.className = "symptom-result-category";
        resultCategory.textContent = item.custom
          ? translations[state.language].customSymptomTitle
          : item.categories.map(categoryLabel).join(" · ");
        copy.append(resultCategory);
      }
      const indicator = document.createElement("span");
      indicator.className = "symptom-selection-indicator";
      indicator.setAttribute("aria-hidden", "true");
      indicator.innerHTML = isSelected
        ? '<svg viewBox="0 0 20 20"><path d="m5 10 3.2 3.2L15 6.5"></path></svg>'
        : "";
      button.append(icon, copy, indicator);
      symptomGrid.append(button);
    });
  }

  function renderSymptomBrowser() {
    renderCategories();
    renderSymptomOptions();
    renderSelectionSummary();
    document.getElementById("clear-search").hidden = !state.search;
  }

  function setLanguage(language) {
    if (!translations[language]) return;
    state.language = language;
    document.documentElement.lang = language === "kn" ? "kn" : "en";
    document.getElementById("wizard-step-label").textContent = translations[language][state.step === 2 ? "stepTwoOfThree" : "stepOneOfThree"];
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[language][element.dataset.i18n];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = translations[language][element.dataset.i18nPlaceholder];
      if (value !== undefined) element.placeholder = value;
    });
    document.querySelectorAll("[data-set-language]").forEach((control) => {
      if (control instanceof HTMLSelectElement) control.value = language;
    });
    if (customSymptomError) customSymptomError.hidden = true;
    renderSymptomBrowser();
    if (state.report) renderResults();
  }

  function analyzeSymptoms(description, selectedSymptoms) {
    const normalized = normalize(description);
    const detected = new Map(selectedSymptoms.map((item) => [item.id, item]));
    symptomTerms.forEach((term) => {
      if (term.aliases.some((alias) => normalized.includes(normalize(alias)))) detected.set(term.id, term);
    });
    return [...detected.values()];
  }

  function collectReport() {
    const description = textInput.value.trim();
    if (state.selections.size === 0) {
      errorBox.textContent = translations[state.language].validation;
      errorBox.hidden = false;
      document.getElementById("selection-step").hidden = false;
      document.getElementById("details-step").hidden = true;
      document.getElementById("continue-to-details").focus();
      return;
    }
    errorBox.hidden = true;
    state.report = {
      date: new Intl.DateTimeFormat(state.language === "kn" ? "kn-IN" : "en-IN", { year: "numeric", month: "long", day: "numeric" }).format(new Date()),
      language: state.language === "kn" ? "ಕನ್ನಡ" : "English",
      description,
      symptoms: analyzeSymptoms(description, [...state.selections.values()]),
      duration: document.getElementById("duration").value,
      severity: document.getElementById("severity").value,
      period: document.getElementById("period-pattern").value,
      impact: document.getElementById("daily-impact").value
    };
    renderResults();
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setWizardStep(step) {
    state.step = step;
    document.getElementById("selection-step").hidden = step !== 1;
    document.getElementById("details-step").hidden = step !== 2;
    document.getElementById("wizard-step-label").textContent = translations[state.language][step === 1 ? "stepOneOfThree" : "stepTwoOfThree"];
    errorBox.hidden = true;
    if (step === 2) renderSelectedList(detailsSelectedList, false);
  }

  function renderResults() {
    const t = translations[state.language];
    const r = state.report;
    if (!r) return;
    const hasUrgent = r.symptoms.some((symptom) => symptom.urgent);
    diagnosisLink.href = "#results";
    featureDiagnosisLink.href = "#results";
    const selectedNames = r.symptoms.map(itemLabel);
    const durations = { days: "durationDays", weeks: "durationWeeks", months: "durationMonths", longer: "durationLonger", unsure: "durationUnsure" };
    const severities = { mild: "severityMild", moderate: "severityModerate", severe: "severitySevere" };
    const periods = { irregular: "periodIrregular", missed: "periodMissed", heavy: "periodHeavy", painful: "periodPainful", "no-change": "periodNoChange" };
    const impacts = { "not-much": "impactLow", some: "impactSome", often: "impactOften" };
    const val = (key) => key ? t[key] : t.reportNotProvided;
    const listQuestions = [t.doctorQ1, t.doctorQ2, t.doctorQ3].map((question) => `<li>${question}</li>`).join("");
    results.innerHTML = `
      <p class="results-step-label">${t.stepThreeOfThree}</p>
      <div class="results-banner"><span class="eyebrow">${t.resultsEyebrow}</span><h2>${t.resultsTitle}</h2><p>${t.resultsIntro}</p></div>
      ${hasUrgent ? `<div class="result-alert urgent" role="alert"><h3>${t.urgentTitleResult}</h3><p>${t.urgentCopyResult}</p></div>` : `<div class="result-alert"><h3>${t.routineTitleResult}</h3><p>${t.routineCopyResult}</p></div>`}
      <div class="result-grid">
        <article class="result-card"><h3>${t.identifiedTitle}</h3>${selectedNames.length ? `<div class="identified-chips">${selectedNames.map((name) => `<span class="identified-chip">${escapeHtml(name)}</span>`).join("")}</div>` : `<p>${t.noneRecognized}</p>`}</article>
        <article class="result-card"><h3>${t.pcosTitle}</h3><p>${t.pcosCopy}</p></article>
        <article class="result-card"><h3>${t.alternativesTitle}</h3><p>${t.alternativesCopy}</p></article>
        <article class="result-card"><h3>${t.commonTitle}</h3><p>${t.commonCopy}</p></article>
        <article class="result-card"><h3>${t.doctorTitle}</h3><ul>${listQuestions}</ul></article>
        <article class="result-card"><h3>${t.careTitle}</h3><p>${hasUrgent ? t.urgentCopyResult : t.routineCopyResult}</p></article>
        <article class="result-card report-card" id="doctor-report"><h3>${t.reportTitle}</h3>
          <p class="report-meta">${t.reportDate}: ${escapeHtml(r.date)} &nbsp;·&nbsp; ${t.reportLanguage}: ${escapeHtml(r.language)}</p>
          <p><strong>${t.reportSymptoms}:</strong> ${selectedNames.length ? selectedNames.map(escapeHtml).join(", ") : t.noSymptomsListed}</p>
          <p><strong>${t.reportDescription}:</strong> ${r.description ? escapeHtml(r.description) : t.reportNotProvided}</p>
          <p><strong>${t.reportDuration}:</strong> ${val(durations[r.duration])} &nbsp;·&nbsp; <strong>${t.reportSeverity}:</strong> ${val(severities[r.severity])}</p>
          <p><strong>${t.reportFollowup}:</strong> ${t.periodAnswer}: ${val(periods[r.period])}; ${t.impactAnswer}: ${val(impacts[r.impact])}.</p>
          <p><strong>${t.reportQuestions}:</strong></p><ul>${listQuestions}</ul>
        </article>
      </div>
      <p class="disclaimer">${t.disclaimer}</p>
      <div class="results-actions"><button type="button" class="button button-primary" id="print-report">${t.printButton}</button><button type="button" class="button button-outline" id="edit-symptoms">${t.selectedSymptomsTitle}</button><button type="button" class="button button-outline" id="edit-answers">${t.backButton}</button><button type="button" class="button button-outline" id="restart">${t.restartButton}</button></div>`;
    form.hidden = true;
    results.hidden = false;
    document.getElementById("print-report").addEventListener("click", () => window.print());
    document.getElementById("edit-symptoms").addEventListener("click", () => {
      state.report = null;
      results.hidden = true;
      form.hidden = false;
      setWizardStep(1);
      renderSymptomBrowser();
      document.getElementById("checker").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.getElementById("edit-answers").addEventListener("click", () => {
      state.report = null;
      results.hidden = true;
      form.hidden = false;
      setWizardStep(2);
      document.getElementById("checker").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.getElementById("restart").addEventListener("click", restart);
  }

  function restart() {
    form.reset();
    errorBox.hidden = true;
    customSymptomError.hidden = true;
    state.report = null;
    state.category = "menstrual";
    state.search = "";
    state.selections.clear();
    state.customSymptoms = [];
    state.customCounter = 0;
    diagnosisLink.href = "#checker";
    featureDiagnosisLink.href = "#checker";
    results.hidden = true;
    results.innerHTML = "";
    form.hidden = false;
    searchInput.value = "";
    customSymptomInput.value = "";
    setWizardStep(1);
    renderSymptomBrowser();
    document.getElementById("checker").scrollIntoView({ behavior: "smooth" });
    searchInput.focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-set-language]").forEach((control) => control.addEventListener("change", () => setLanguage(control.value)));
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true";
    mobileMenuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    headerMenu.classList.toggle("is-open", !isOpen);
  });
  function setResourcesOpen(isOpen) {
    resourcesTrigger.setAttribute("aria-expanded", String(isOpen));
    resourcesMenu.hidden = !isOpen;
  }
  resourcesDropdown.addEventListener("pointerenter", () => setResourcesOpen(true));
  resourcesDropdown.addEventListener("pointerleave", () => setResourcesOpen(false));
  resourcesDropdown.addEventListener("focusin", () => setResourcesOpen(true));
  resourcesDropdown.addEventListener("focusout", (event) => {
    if (!resourcesDropdown.contains(event.relatedTarget)) setResourcesOpen(false);
  });
  resourcesTrigger.addEventListener("click", () => setResourcesOpen(true));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const resourcesWereOpen = resourcesTrigger.getAttribute("aria-expanded") === "true";
      const mobileMenuWasOpen = mobileMenuToggle.getAttribute("aria-expanded") === "true";
      setResourcesOpen(false);
      headerMenu.classList.remove("is-open");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileMenuToggle.setAttribute("aria-label", "Open navigation menu");
      if (resourcesWereOpen) resourcesTrigger.focus();
      else if (mobileMenuWasOpen) mobileMenuToggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!resourcesDropdown.contains(event.target)) setResourcesOpen(false);
    if (!headerMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
      headerMenu.classList.remove("is-open");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
      mobileMenuToggle.setAttribute("aria-label", "Open navigation menu");
    }
  });
  headerMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    headerMenu.classList.remove("is-open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.setAttribute("aria-label", "Open navigation menu");
    setResourcesOpen(false);
  }));
  categoryGrid.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest("button[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    state.search = "";
    searchInput.value = "";
    renderSymptomBrowser();
  });
  symptomGrid.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest("button[data-symptom-id]");
    if (!button) return;
    const id = button.dataset.symptomId;
    if (state.selections.has(id)) state.selections.delete(id);
    else {
      const item = [...symptomTerms, ...state.customSymptoms].find((symptom) => symptom.id === id);
      if (!item) return;
      state.selections.set(item.id, item);
    }
    renderSymptomOptions();
    renderSelectionSummary();
  });
  selectedSymptomsList.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest("button[data-remove-symptom]");
    if (!button) return;
    const item = state.selections.get(button.dataset.removeSymptom);
    state.selections.delete(button.dataset.removeSymptom);
    if (item && item.custom) state.customSymptoms = state.customSymptoms.filter((symptom) => symptom.id !== item.id);
    renderSymptomBrowser();
  });
  searchInput.addEventListener("input", () => {
    state.search = searchInput.value.trim();
    renderCategories();
    renderSymptomOptions();
    document.getElementById("clear-search").hidden = !state.search;
  });
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") event.preventDefault();
  });
  document.getElementById("clear-search").addEventListener("click", () => {
    searchInput.value = "";
    state.search = "";
    renderSymptomBrowser();
    searchInput.focus();
  });
  document.getElementById("add-custom-symptom").addEventListener("click", () => {
    const label = customSymptomInput.value.trim();
    if (!label) {
      customSymptomError.textContent = translations[state.language].customSymptomEmpty;
      customSymptomError.hidden = false;
      customSymptomInput.focus();
      return;
    }
    const normalizedLabel = normalize(label);
    const existing = symptomTerms.find((item) => [item.en, item.kn, ...item.aliases].some((value) => normalize(value) === normalizedLabel));
    const existingCustom = state.customSymptoms.find((item) => normalize(item.en) === normalizedLabel);
    const duplicate = existing || existingCustom;
    if (duplicate) {
      state.selections.set(duplicate.id, duplicate);
      customSymptomError.textContent = translations[state.language].customSymptomDuplicate;
      customSymptomError.hidden = false;
      renderSymptomBrowser();
      customSymptomInput.focus();
      return;
    }
    const item = {
      id: `custom-${++state.customCounter}`,
      categories: [],
      en: label,
      kn: label,
      icon: "custom",
      aliases: [],
      custom: true,
      urgent: false
    };
    state.customSymptoms.push(item);
    state.selections.set(item.id, item);
    customSymptomInput.value = "";
    customSymptomError.hidden = true;
    renderSymptomBrowser();
  });
  customSymptomInput.addEventListener("input", () => { customSymptomError.hidden = true; });
  customSymptomInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("add-custom-symptom").click();
    }
  });
  document.getElementById("clear-selection").addEventListener("click", () => {
    state.selections.clear();
    state.customSymptoms = [];
    renderSymptomBrowser();
  });
  document.getElementById("continue-to-details").addEventListener("click", () => {
    if (state.selections.size === 0) return;
    setWizardStep(2);
    document.getElementById("details-step").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.getElementById("back-to-selection").addEventListener("click", () => {
    setWizardStep(1);
    document.getElementById("checker").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (state.step === 2) collectReport();
  });
  setLanguage("en");
})();
