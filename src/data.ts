import {
  ResearchExperience,
  Education,
  Publication,
  Project,
  HonorAward,
  SkillCategory,
  LeadershipActivity,
  Workshop,
  Snapshot
} from './types';

export const personalInfo = {
  name: "Amaan Arif",
  title: "M.Tech Bioinformatics & AI Researcher",
  subTitle: "Gold Medalist | Predictive ML & Biological Systems",
  location: "Lucknow, India",
  email: "arif.amaan25lko@gmail.com",
  aboutText: "I combine wet-lab biological principles with full-stack development and predictive AI. Currently pursuing M.Tech in Bioinformatics, I specialize in building explainable machine learning models for non-invasive medical diagnostics, precision crop recommendations, and environmental toxicology. My goal is to bridge the gap between biological algorithms and micro-scalable software networks.",
  github: "https://github.com/AmaanArif25",
  linkedin: "https://www.linkedin.com/in/amaanarif/",
  huggingface: "https://huggingface.co/arifamaan25lko",
  googleScholar: "https://scholar.google.com/citations?hl=en&user=i2xR3TwAAAAJ",
};

export const researchExperiences: ResearchExperience[] = [
  {
    id: "exp_nasa",
    institution: "NASA GeneLab",
    location: "Remote",
    role: "AI/ML Analysis Working Group Member – Multi-Omics & Space Biology Research",
    period: "Nov 2025 – Present",
    summary: "Collaborate with multidisciplinary AI/ML Analysis Working Groups to develop computational workflows for multi-omics data integration, transcriptomics, and machine learning analyses using NASA GeneLab datasets. Analyze publicly available NASA GeneLab omics datasets to investigate biological responses through transcriptomic analysis, statistical modeling, and reproducible bioinformatics pipelines and contribute to collaborative research initiatives, subgroup discussions, scientific manuscripts, conference posters, and workshop presentations.",
    details: [
      "Collaborate with multidisciplinary AI/ML Analysis Working Groups to develop computational workflows for multi-omics data integration, transcriptomics, and machine learning analyses using NASA GeneLab datasets.",
      "Analyze publicly available NASA GeneLab omics datasets to investigate biological responses through transcriptomic analysis, statistical modeling, and reproducible bioinformatics pipelines.",
      "Contribute to collaborative research initiatives, subgroup discussions, scientific manuscripts, conference posters, and workshop presentations."
    ],
    tags: ["Space Biology", "Multi-Omics", "NASA GeneLab", "Transcriptomics", "Machine Learning"]
  },
  {
    id: "exp1",
    institution: "CSIR-Indian Institute of Toxicology Research",
    location: "Lucknow, India",
    role: "Project Assistant",
    period: "May 2025 – Feb 2026",
    summary: "Developed AI-assisted computational pipelines for molecular docking, linker ranking, bioisostere identification, and biomimetic compound analysis to support structure-based drug discovery. Applied machine learning algorithms to predict metabolite profiles and prioritize drug candidates using molecular descriptors and cheminformatics workflows.",
    details: [
      "Developed a metabolism-aware, multi-task machine learning pipeline to predict multi-class skin toxicity for biomimetic parent compounds and metabolites.",
      "Translated complex toxicological outputs into an interpretable, AOP-aligned (Adverse Outcome Pathway) risk score.",
      "Utilized AI for drug repurposing, chemical scaffold analysis, linker design and ranking, and the identification of cryptic pockets."
    ],
    tags: ["Computational Chemistry", "Toxicogenomics", "Multi-task ML", "Drug Repurposing"]
  },
  {
    id: "exp2",
    institution: "Command Hospital, Lucknow",
    location: "Lucknow, India",
    role: "Research Intern",
    period: "Jan 2025 – May 2025",
    summary: "AI-enabled non-invasive oral cancer screening system by integrating clinical records, intraoral images, and breath biomarker data from patient cohorts. Designed machine learning models for multimodal data analysis, feature extraction, and predictive classification to support early oral cancer detection.",
    details: [
      "Designed a multi-modal machine learning pipeline that successfully integrated disparate data sources, including complex clinical parameters, diagnostic medical imaging, and novel breath-based biomarkers.",
      "Bridged clinical pathology with computational predictive modeling to improve non-invasive screening accuracy."
    ],
    tags: ["Multi-modal ML", "Medical Image Analysis", "Clinical Biomarkers", "Predictive Diagnostics"]
  },
  {
    id: "exp3",
    institution: "CSIR-Institute of Genomics and Integrative Biology",
    location: "New Delhi, India",
    role: "Research Intern (Bachelor's Thesis Project)",
    period: "Dec 2024 – May 2025",
    summary: "Developed an LSTM-based deep learning framework to improve genome assembly through contig extension and scaffold optimization using viral genomic datasets. Investigated advanced scaffolding strategies and computational approaches for enhancing assembly continuity, completeness, and genome reconstruction accuracy. Completed the undergraduate thesis, Breaking Barriers in Genome Assembly with Advanced Scaffolding Methods, integrating bioinformatics algorithms with deep learning for genome assembly analysis.",
    details: [
      "Engineered and trained a specialized LLM on viral reference genomes to automate and predict viral contig extensions.",
      "Established rigorous computational validation protocols; utilized BLAST to verify generated sequences, achieving 99% similarity and proving zero hallucination in the synthesized viral genomic data."
    ],
    tags: ["LLMs", "Genomics", "BLAST", "Deep Learning"]
  }
];

export const educations: Education[] = [
  {
    id: "edu1",
    institution: "Integral University",
    location: "Lucknow, India",
    degree: "Master of Technology in Bioinformatics",
    period: "2025 - 2027",
    gpa: "CGPA: 9.4 / 10.0"
  },
  {
    id: "edu2",
    institution: "Amity University, Uttar Pradesh (Lucknow Campus)",
    location: "Lucknow, India",
    degree: "Bachelor of Technology in Biotechnology (Gold Medalist)",
    period: "2021 - 2025",
    gpa: "CGPA: 9.06 / 10.0"
  },
  {
    id: "edu3",
    institution: "City Montessori School, Rajajipuram",
    location: "Lucknow, India",
    degree: "Senior Secondary School (12th, ISC)",
    period: "2019-2020",
    gpa: "89%"
  },
  {
    id: "edu4",
    institution: "City Montessori School, Rajajipuram",
    location: "Lucknow, India",
    degree: "Secondary Education (10th, ICSE)",
    period: "2017-2018",
    gpa: "79.4%"
  }
];

export const projects: Project[] = [
  {
    id: "proj01",
    projectNum: "01",
    title: "AI-Based Oral Cancer Screening Device",
    description: "Developed a multimodal AI system integrating clinical data, medical imaging, and breath biomarkers for non-invasive early oral cancer screening. Designed to support early diagnosis and improve accessibility in resource-limited healthcare settings.",
    tags: ["Python", "Machine Learning", "Computer Vision", "Healthcare AI", "Multimodal Learning"],
    category: "Clinical Diagnostics",
    highlights: [
      "Integrates diagnostic medical imaging and breath biomarkers.",
      "Aims to improve access and early detection in remote settings.",
      "Patent-derived device mapping [I.4] and copyrighted SMIRITI software [I.2]."
    ],
    imageUrl: "/p_1.png",
    status: "PATENTED"
  },
  {
    id: "proj02",
    projectNum: "02",
    title: "Metabolism-Aware Skin Toxicity Prediction Platform",
    description: "Built a multi-task machine learning framework for predicting multiple classes of skin toxicity in biomimetic compounds and their metabolites. Integrated adverse outcome pathways (AOPs) to generate interpretable toxicity risk scores.",
    tags: ["Python", "Machine Learning", "Toxicogenomics", "QSAR", "Explainable AI"],
    category: "Computational Toxicology",
    highlights: [
      "Calculates skin-permeation and metabolic compound transformation rates.",
      "Delivers interpretable, multi-class risk indexes based on molecular descriptors.",
      "Aligned with Adverse Outcome Pathways (AOP) for regulatory safety clearances."
    ],
    imageUrl: "/p_2.png"
  },
  {
    id: "proj03",
    projectNum: "03",
    title: "AI-Driven Drug Repurposing & Chemical Space Analysis",
    description: "Developed ML pipelines for drug repurposing, scaffold discovery, linker design, and chemical space exploration using clinically approved compounds to identify novel therapeutic opportunities.",
    tags: ["Python", "Cheminformatics", "Machine Learning", "RDKit", "Drug Discovery"],
    category: "Cheminformatics",
    highlights: [
      "Screens approved clinical compounds to map novel binding affinities.",
      "Accelerates scaffold ranking, molecular linker evaluations, and pocket mappings.",
      "Optimizes traditional pharmacological workflows using fast cloud-native clustering."
    ],
    imageUrl: "/p_3.png"
  },
  {
    id: "proj05",
    projectNum: "05",
    title: "Viral Genome Scaffolding Using Large Language Models",
    description: "Developed an LLM-based framework for viral contig extension and genome scaffolding. Validated generated sequences against reference genomes using BLAST with >99% similarity.",
    tags: ["Python", "LLMs", "Genomics", "Bioinformatics", "BLAST"],
    category: "AI & Genomics",
    highlights: [
      "Adapts generative language-model weights to map viral genomic nucleotide configurations.",
      "Demonstrates high contig-assembly accuracy through rigorous computational validation.",
      "Achieves >99% similarity index during direct BLAST query verifications."
    ],
    imageUrl: "/p_5.png",
    status: "THESIS"
  },
  {
    id: "proj06",
    projectNum: "06",
    title: "Genomic Variant Classification & RAG Pipeline",
    description: "Fine-tuned BioBERT for genomic variant classification and developed a Retrieval-Augmented Generation (RAG) system using vector databases for genomic knowledge retrieval and interpretation.",
    tags: ["BioBERT", "Pinecone", "Streamlit", "Transformers", "RAG"],
    category: "Bioinformatics",
    highlights: [
      "Classifies genomic variants with deep contextual embeddings using BioBERT.",
      "Retrieves scientific findings from peer-reviewed databases in real-time.",
      "Allows research clinicians to query target mutation consequences seamlessly."
    ],
    imageUrl: "/p_6.png"
  },
  {
    id: "proj07",
    projectNum: "07",
    title: "De Novo Drug Design for Colorectal Cancer",
    description: "Designed novel drug candidates by extracting non-toxic pharmacophore scaffolds from approved colorectal cancer drugs and generating optimized therapeutic molecules.",
    tags: ["RDKit", "DrugBank", "Molecular Design", "Machine Learning", "Cheminformatics"],
    category: "Onco-Cheminformatics",
    highlights: [
      "Extracts therapeutic sub-structures and scaffolds from the public DrugBank registry.",
      "Evaluates generated molecular candidates for mutagenic and pharmacokinetic safety.",
      "Performs highly parallelized virtual screening against critical oncology receptors."
    ],
    imageUrl: "/p_7.png"
  },
  {
    id: "proj08",
    projectNum: "08",
    title: "Frontotemporal Dementia Phytochemical Discovery Platform",
    description: "Performed transcriptomic and network biology analysis to identify neuroprotective phytochemicals against Frontotemporal Dementia, leading to a bioRxiv publication. Evaluated phytochemicals from Indian spices using drug-likeness screening, toxicity prediction, molecular docking, and target interaction analysis for neurological disorders.",
    tags: ["R", "Transcriptomics", "Network Biology", "RNA-Seq", "Systems Biology", "Molecular Docking", "Drug Discovery"],
    category: "Neurogenomics",
    highlights: [
      "Published bioRxiv preprint linking transcriptional profiles to Rosmarinic Acid target mechanisms.",
      "Executes comprehensive virtual docking screens utilizing global botanical archives.",
      "Filters molecular libraries against strict brain-barrier penetration parameters."
    ],
    imageUrl: "/p_8.png",
    status: "PUBLISHED",
    linkUrl: "https://doi.org/10.1101/2025.09.05.674389"
  },
  {
    id: "proj10",
    projectNum: "10",
    title: "Multiple Sclerosis Microbiome Analysis",
    description: "Conducted microbiome profiling and diversity analysis using QIIME2 to investigate microbial signatures associated with Multiple Sclerosis.",
    tags: ["QIIME2", "Metagenomics", "Microbiome", "Python", "Biostatistics"],
    category: "Metagenomics",
    highlights: [
      "Identifies specific dysbiosis indicators correlated with patient clinical metrics.",
      "Utilizes QIIME2 to perform alpha and beta diversity computational modeling.",
      "Maps metabolic pathway variations to spotlight active autoimmune drivers."
    ],
    imageUrl: "/p_10.png",
    status: "PUBLISHED",
    linkUrl: "https://www.biorxiv.org/content/10.64898/2026.07.25.740724v1"
  },
  {
    id: "proj11",
    projectNum: "11",
    title: "Single-Cell Transcriptomics of Rhabdomyosarcoma",
    description: "Analyzed single-cell RNA sequencing datasets to identify tumor heterogeneity, cellular subpopulations, and molecular pathways involved in Rhabdomyosarcoma progression.",
    tags: ["Seurat", "scRNA-seq", "R", "Single Cell Biology", "Bioinformatics"],
    category: "Cancer Biology",
    highlights: [
      "Extracts individual cellular transcript signatures to model sarcoma tumor structures.",
      "Implements advanced clustering algorithms to trace cellular differentiation trajectories.",
      "Highlights novel drug-target biomarkers driving fast progression pathways."
    ],
    imageUrl: "/p_11.png"
  },
  {
    id: "proj12",
    projectNum: "12",
    title: "Prostate Cancer Survival & Biomarker Discovery",
    description: "Performed differential gene expression, machine learning-based biomarker selection, and survival analysis using TCGA and GEO datasets for prostate cancer prognosis.",
    tags: ["TCGA", "GEO", "Machine Learning", "Survival Analysis", "R"],
    category: "Oncology Data Science",
    highlights: [
      "Ingests raw TCGA and GEO patient dataset files to locate diagnostic biomarkers.",
      "Models long-term patient prognostic indicators using Cox Proportional Hazard networks.",
      "Validates signature target performance against historic validation groups."
    ],
    imageUrl: "/p_12.png"
  },
  {
    id: "proj13",
    projectNum: "13",
    title: "Breast Cancer Copy Number Alteration Analysis",
    description: "Investigated genomic copy number alterations and their association with breast cancer progression and molecular subtypes using large-scale cancer datasets.",
    tags: ["Cancer Genomics", "TCGA", "Copy Number Analysis", "R", "Bioinformatics"],
    category: "Cancer Genomics",
    highlights: [
      "Maps chromosomal duplications and deletions linked to tumor recurrence risks.",
      "Analyzes dynamic genome architecture changes across major breast cancer classes.",
      "Assesses copy-number profiles using robust statistical regression utilities."
    ],
    imageUrl: "/p_13.png"
  },
  {
    id: "proj14",
    projectNum: "14",
    title: "Autism Spectrum Disorder Biomarker Discovery",
    description: "Applied differential expression analysis and machine learning approaches to identify candidate biomarkers associated with Autism Spectrum Disorder.",
    tags: ["Machine Learning", "Transcriptomics", "Biomarker Discovery", "Python", "Bioinformatics"],
    category: "Neurogenomics",
    highlights: [
      "Analyzes peripheral whole-blood transcriptomic datasets.",
      "Applies feature selection techniques to identify predictive biomolecules.",
      "Develops high-classification-accuracy predictive models for early assessment."
    ],
    imageUrl: "/p_14.png"
  },

];

export const publications: Publication[] = [
  {
    id: "pub_j4",
    key: "J.4",
    authors: "Siddharth Singh, Sanjana Mishra, Amaan Arif, Prekshi Garg, Prachi Srivastava",
    title: "Current Applications of Artificial Intelligence and Machine Learning in Plant Functional Genomics",
    source: "Crop Improvement with Artificial Intelligence: Methods and Applications (Chapter 6), John Wiley & Sons Ltd, pp. 113",
    date: "May 2026",
    type: "journal",
    status: "Accepted Book Chapter",
    doi: "https://www.wiley.com/en-ie/shop/general-introductory-agriculture/crop-improvement-with-artificial-intelligence-methods-and-applications-p-9781394330485"
  },
  {
    id: "pub_j5",
    key: "J.5",
    authors: "Amaan Arif, Prachi Srivastava",
    title: "Artificial Intelligence Models for Analysing Plant Transcriptomics",
    source: "Crop Improvement with Artificial Intelligence: Methods and Applications (Chapter 10), John Wiley & Sons Ltd, pp. 195",
    date: "May 2026",
    type: "journal",
    status: "Accepted Book Chapter",
    doi: "https://www.wiley.com/en-ie/shop/general-introductory-agriculture/crop-improvement-with-artificial-intelligence-methods-and-applications-p-9781394330485"
  },
  {
    id: "pub_j8",
    key: "J.8",
    authors: "Amaan Arif (Editor)",
    title: "FROM COGNITIVE WARFARE TO BIOMEDICAL INNOVATION: MODERN SCIENTIFIC APPROACHES",
    source: "Haliç Yayınevi, İstanbul, Türkiye (ISBN: 978-625-93333-8-0)",
    date: "February 12, 2026",
    type: "journal",
    status: "Published Book",
    doi: "https://www.researchgate.net/profile/Abdelkhalik-Sadiki/publication/400741201_Land_Degradation_Assessment_and_Mapping_in_the_Tiflet_Watershed_Morocco/links/698e8d7d42f94d1212aa777e/Land-Degradation-Assessment-and-Mapping-in-the-Tiflet-Watershed-Morocco.pdf"
  },
  {
    id: "pub_j1",
    key: "J.1",
    authors: "Amaan Arif, Prachi Srivastava",
    title: "Challenges and Future Direction in Millets Research",
    source: "Millets as Superfood (1st Edition), CRC Press, 21 Pages",
    date: "January, 2026",
    type: "journal",
    status: "Published Book Chapter",
    doi: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003613374-16/challenges-future-direction-millets-research-amaan-arif-prachi-srivastava?context=ubx&refId=f36a5e26-4182-4494-a3e8-4291a8b7b447"
  },
  {
    id: "pub_j10",
    key: "J.10",
    authors: "Amaan Arif, Prachi Srivastava",
    title: "Diving into Microbiome Gut-Brain Axis to Predict Biomarkers Through Artificial Intelligence",
    source: "Western Journal of Medical Science and Research (WJMSR), Vol 2 Issue 2",
    date: "Dec 28, 2025",
    type: "journal",
    status: "Published Review Article",
    doi: "https://www.westlandpublishers.com/abstract.php?aid=89&jid=2&Article=Diving-into-Microbiome-Gut-Brain-Axis-to-Predict-Biomarkers-Through-Artificial-Intelligence"
  },
  {
    id: "pub_j2",
    key: "J.2",
    authors: "Tanya Jamal, Rinni Singh, Mukul Bajpai, Amaan Arif, Ramakrishnan Parthasarathi",
    title: "Navigating the Landscape of Antibiotic Safety: Traditional Approaches and Emerging Strategies to Overcome Host Ribonucleic Acid (RNA) Off-Target Toxicity",
    source: "ACS Pharmacology & Translational Science (Vol 9/Issue 2)",
    date: "December 13, 2025",
    type: "journal",
    status: "Published",
    doi: "https://pubs.acs.org/doi/10.1021/acsptsci.5c00518?mi=6l0kix4&af=R&AllField=anticancer&target=default&targetTab=std"
  },
  {
    id: "pub_j6",
    key: "J.6",
    authors: "Amaan Arif, Prekshi Garg, Prachi Srivastava",
    title: "Transcriptome Network Biology Reveals the Neuroprotective Potential of Rosmarinic Acid Against Frontotemporal Dementia",
    source: "bioRxiv Preprint Archive",
    date: "September 11, 2025",
    type: "journal",
    status: "Published Preprint",
    doi: "https://doi.org/10.1101/2025.09.05.674389"
  },
  {
    id: "pub_j9",
    key: "J.9",
    authors: "Amaan Arif, Prekshi Garg, Prachi Srivastava",
    title: "Gut Microbiome Analysis Reveals Altered Streptococcaceae And Lachnospiraceae Composition In Patients Suffering From Multiple Sclerosis",
    source: "Microbiology and Biotechnology Letters",
    date: "August 22, 2025",
    type: "journal",
    status: "Published Research Article",
    doi: "https://www.mbl.or.kr/journal/view.html?pn=papers&uid=3447&vmd=Full"
  },
  {
    id: "pub_j3",
    key: "J.3",
    authors: "Amaan Arif, Anshul Tiwari, Meenakshi Srivastava, Prachi Srivastava",
    title: "Classification of Mental Disorder with Deep Generative Models",
    source: "Adversarial Deep Generative Techniques for Early Diagnosis of Neurological Conditions and Mental Health Practises, Springer, pp. 179",
    date: "July 16, 2025",
    type: "journal",
    status: "Published Book Chapter",
    doi: "https://doi.org/10.1007/978-3-031-91147-7"
  },
  {
    id: "pub_j7",
    key: "J.7",
    authors: "Amaan Arif, Prachi Srivastava",
    title: "Deep Learning in Neuroomics: Advances in Brain Mapping and Disease Prediction",
    source: "14th International Mardin Artuklu Scientific Researches Conference Proceedings Book, Liberty Academic Publishers",
    date: "June 2025",
    type: "journal",
    status: "Published Proceeding",
    doi: "https://ibn.idsi.md/sites/default/files/imag_file/14.%20ARTUKLU%20PROCEEDINGS%20BOOK_compressed-2.pdf"
  },
  {
    id: "pub_c1",
    key: "C.1",
    authors: "Amaan Arif",
    title: "Machine Learning-Driven Framework for Precision Crop and Fertilizer Recommendation Using Soil and Climatic Parameters",
    source: "International Conference on Smart Agriculture, Healthcare, and Sustainable Energy (ICSAHSE-2026), Chandigarh University",
    date: "Feb 03-05, 2026",
    type: "conference",
    status: "In-Person Oral Presentation"
  },
  {
    id: "pub_c2",
    key: "C.2",
    authors: "Amaan Arif",
    title: "AI-Powered Toxicity Profiling of Veterinary Drugs and Feed Additives: A Predictive Framework for Livestock Safety",
    source: "2nd World Congress on Animal Science & Veterinary Medicine, Bangkok, Thailand",
    date: "Nov 03-04, 2025",
    type: "conference",
    status: "Virtual Oral Presentation"
  },
  {
    id: "pub_c3",
    key: "C.3",
    authors: "Amaan Arif",
    title: "AI-Driven Linguistic Modelling for Neurodevelopmental Disorders",
    source: "5th International Paris Congress on Applied Sciences, Paris, France",
    date: "Aug 04-08, 2025",
    type: "conference",
    status: "Virtual Oral Presentation"
  },
  {
    id: "pub_c8",
    key: "C.8",
    authors: "Amaan Arif",
    title: "Role of Cloud Computing in High-Throughput Genome Assembly",
    source: "ICETIT-25, Amity University Uttar Pradesh, Lucknow",
    date: "24-25 April 2025",
    type: "conference",
    status: "Virtual Presentation"
  },
  {
    id: "pub_c4",
    key: "C.4",
    authors: "Amaan Arif",
    title: "AI-Powered Toxicity Prediction: Transforming Chemical Risk Assessment with Machine Learning Models",
    source: "7th International İstanbul Contemporary Scientific Research Congress, İstanbul, Turkey",
    date: "2025",
    type: "conference",
    status: "Virtual Presentation"
  },
  {
    id: "pub_c5",
    key: "C.5",
    authors: "Amaan Arif",
    title: "Deep Sight: Revolutionizing Eye Disease Diagnosis through Advanced CNN-Based Retinal Image Classification",
    source: "4th International Conference on Material Science & Engineering, Vienna, Austria",
    date: "2025",
    type: "conference",
    status: "Virtual Presentation"
  },
  {
    id: "pub_c6",
    key: "C.6",
    authors: "Amaan Arif",
    title: "Revolutionizing Ophthalmology with Deep Learning: Automated Retinal Image Classification for Disease Diagnosis",
    source: "3rd European Congress on Biomedical Science and Engineering, Vienna, Austria",
    date: "2025",
    type: "conference",
    status: "Virtual Presentation"
  },
  {
    id: "pub_c7",
    key: "C.7",
    authors: "Amaan Arif",
    title: "Deep Learning in Neuroomics: Advances in Brain Mapping and Disease Prediction",
    source: "14th International Mardin Artuklu Scientific Researches Conference, Mardin, Türkiye",
    date: "2025",
    type: "conference",
    status: "Virtual Presentation"
  },
  {
    id: "pub_c9",
    key: "C.9",
    authors: "Amaan Arif",
    title: "Microbiota and AI",
    source: "International Scientific Symposium on Health and Environment, CSIR-IITR, Lucknow",
    date: "2025",
    type: "conference",
    status: "Symposium Presentation"
  },
  {
    id: "pub_c10",
    key: "C.10",
    authors: "Amaan Arif",
    title: "Transcriptome Network Biology Reveals the Neuroprotective Potential of Rosmarinic Acid Against Frontotemporal Dementia",
    source: "International Conference on Integrating AI, Spirituality, Health Care & Management, Amity University, Lucknow",
    date: "2025",
    type: "conference",
    status: "Oral Presentation"
  },
  {
    id: "pub_c11",
    key: "C.11",
    authors: "Amaan Arif",
    title: "Transcriptomic Profiling Reveals the Key Role of the HDAC1 Gene in Frontotemporal Dementia",
    source: "4th Edition of International Symposium on Amyloidosis (ISAD-2023), Barcelona, Spain",
    date: "2023",
    type: "conference",
    status: "Virtual Presentation"
  },
  {
    id: "pub_c12",
    key: "C.12",
    authors: "Amaan Arif",
    title: "Machine Learning-Based Dementia Prediction Using Clinical Data: Non-Invasive Approach for Early Detection and Management",
    source: "International Conference on Neurology and Neuro Disorders, Amity University Noida with IUPUI, USA",
    date: "2023",
    type: "conference",
    status: "Oral Presentation"
  },
  {
    id: "pub_i1",
    key: "I.1",
    authors: "Amaan Arif",
    title: "BHOOMITRA",
    subtitle: "AI-Powered Precision Agriculture Decision Support System",
    description: "BHOOMITRA is an intelligent agricultural recommendation platform designed to support data-driven farming decisions. The system integrates soil nutrient profiles, environmental parameters, and machine learning models to recommend optimal crop selection and fertilizer strategies. By enabling personalized agricultural guidance, the platform aims to improve productivity, resource efficiency, and sustainable farming practices.",
    technology: "Machine Learning • Predictive Analytics • Precision Agriculture • Decision Support Systems",
    source: "Copyright Office, Government of India",
    date: "2025",
    type: "intellectual_property",
    status: "Copyright Granted - Government of India"
  },
  {
    id: "pub_i2",
    key: "I.2",
    authors: "Amaan Arif, et al.",
    title: "AI-Enabled Non-Invasive Oral Cancer Detection Device",
    description: "An integrated hardware-software medical technology platform developed for early oral cancer screening. The device combines clinical parameters, medical imaging, and breath-based biomarkers within a multimodal artificial intelligence framework to support rapid, non-invasive risk assessment. The innovation is designed to improve accessibility to early screening and assist healthcare professionals in identifying high-risk individuals at an earlier stage of disease progression.",
    technology: "Medical Devices • Artificial Intelligence • Computer Vision • Multimodal Learning • Digital Health",
    source: "Indian Patent Office",
    date: "2025",
    type: "intellectual_property",
    status: "Patent Granted - Indian Patent Office"
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Computational Biology & Bioinformatics",
    skills: [
      "RNA-Seq Analysis",
      "Single-Cell RNA-Seq (scRNA-seq)",
      "Spatial Transcriptomics",
      "Bulk Transcriptomics",
      "Differential Expression Analysis",
      "Gene Set Enrichment Analysis (GSEA)",
      "Pathway & Functional Enrichment",
      "Network Biology",
      "Clinical Bioinformatics",
      "Multi-Omics Data Integration",
      "TCGA & GEO Data Analysis",
      "Cancer Genomics",
      "Variant Calling & Annotation",
      "Genome Assembly & Scaffolding",
      "Comparative Genomics",
      "BLAST",
      "Clustal Omega",
      "HISAT2",
      "Bowtie2",
      "STAR Alignment",
      "SAMtools",
      "BCFtools",
      "GATK",
      "DESeq2",
      "EdgeR",
      "Seurat",
      "Scanpy",
      "Cytoscape"
    ]
  },
  {
    category: "Epigenomics & Regulatory Genomics",
    skills: [
      "DNA Methylation Analysis",
      "Methylation Array Analysis",
      "Epigenome-Wide Association Studies (EWAS)",
      "ChIP-Seq Analysis",
      "ATAC-Seq Analysis",
      "Peak Calling & Annotation",
      "Chromatin Accessibility Analysis",
      "Transcription Factor Binding Analysis",
      "Regulatory Network Analysis",
      "Integrative Epigenomics"
    ]
  },
  {
    category: "Metagenomics & Microbiome Analytics",
    skills: [
      "QIIME2",
      "Kraken2",
      "MetaPhlAn",
      "Taxonomic Profiling",
      "Functional Metagenomics",
      "Alpha & Beta Diversity Analysis",
      "Microbial Network Analysis",
      "Microbiome Biomarker Discovery",
      "Environmental Metagenomics",
      "Shotgun Metagenomics",
      "Microbial Ecology Analytics"
    ]
  },
  {
    category: "Computational Drug Discovery & Cheminformatics",
    skills: [
      "Computer-Aided Drug Design (CADD)",
      "Structure-Based Drug Design",
      "Ligand-Based Drug Design",
      "De Novo Drug Design",
      "Drug Repurposing",
      "Virtual Screening",
      "Molecular Docking",
      "Molecular Interaction Analysis",
      "Protein-Ligand Modeling",
      "Scaffold Hopping",
      "Chemical Space Analysis",
      "Pharmacophore Modeling",
      "Lead Optimization",
      "ADMET Prediction",
      "Toxicity Prediction",
      "Cryptic Pocket Identification",
      "Fragment-Based Drug Discovery",
      "RDKit",
      "AutoDock Vina",
      "PyRx",
      "SwissDock",
      "Discovery Studio",
      "UCSF Chimera",
      "ChimeraX",
      "LigPlot+",
      "PLIP",
      "Avogadro"
    ]
  },
  {
    category: "QSAR & Predictive Toxicology",
    skills: [
      "QSAR Modeling",
      "Multi-Task Learning",
      "Toxicogenomics",
      "Explainable Toxicity Prediction",
      "Adverse Outcome Pathways (AOP)",
      "Metabolism-Aware Toxicity Modeling",
      "Chemical Risk Assessment",
      "Feature Engineering",
      "Descriptor Generation",
      "Molecular Fingerprinting",
      "Applicability Domain Analysis",
      "Interpretability Frameworks"
    ]
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Explainable AI (XAI)",
      "SHAP Analysis",
      "Predictive Modeling",
      "Classification & Regression",
      "Ensemble Learning",
      "Multi-Output Learning",
      "Graph Neural Networks (GNNs)",
      "Knowledge Graphs",
      "Reinforcement Learning",
      "Transfer Learning",
      "Computer Vision",
      "Medical Image Analysis",
      "Multimodal AI",
      "Healthcare AI",
      "Time-Series Modeling",
      "TensorFlow",
      "PyTorch",
      "PyTorch Geometric",
      "Keras",
      "Scikit-Learn",
      "LightGBM",
      "XGBoost",
      "CatBoost",
      "Random Forest",
      "Optuna"
    ]
  },
  {
    category: "Generative AI & Large Language Models",
    skills: [
      "Large Language Models (LLMs)",
      "Biomedical NLP",
      "Retrieval-Augmented Generation (RAG)",
      "BioBERT",
      "Transformer Architectures",
      "Vector Databases",
      "Prompt Engineering",
      "Fine-Tuning",
      "Embedding Models",
      "Knowledge Retrieval Systems",
      "LangChain",
      "Pinecone",
      "Hugging Face",
      "OpenAI APIs",
      "Sentence Transformers",
      "Streamlit"
    ]
  },
  {
    category: "Clinical Research & Biostatistics",
    skills: [
      "Clinical Data Analysis",
      "Survival Analysis",
      "Kaplan-Meier Analysis",
      "Cox Regression",
      "Biostatistics",
      "Experimental Design",
      "Hypothesis Testing",
      "Predictive Healthcare Analytics",
      "Electronic Health Data Analysis",
      "Medical Data Integration"
    ]
  },
  {
    category: "Programming & Scientific Computing",
    skills: [
      "Python",
      "R",
      "SQL",
      "Bash",
      "Linux",
      "Jupyter Notebook",
      "Google Colab",
      "Git",
      "GitHub",
      "REST APIs",
      "NumPy",
      "Pandas",
      "SciPy",
      "Matplotlib",
      "Seaborn",
      "Plotly"
    ]
  },
  {
    category: "Cloud Computing & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud Platform",
      "Azure Machine Learning",
      "High Performance Computing (HPC)",
      "Linux Clusters",
      "MLOps Fundamentals",
      "Workflow Automation",
      "Cloud-Based AI Deployment"
    ]
  }
];

export const honorsAndAwards: HonorAward[] = [
  {
    id: "ha1",
    title: "Partial Scholarship Award (90%)",
    issuer: "Computational Biology Bootcamp '26 – Genomac Innovation Hub (G-iHub)",
    date: "2026",
    description: "Highly competitive, focus on multi-omics data integration and drug targets"
  },
  {
    id: "ha2",
    title: "Shree Baljit Shastri Award for Best in Human & Traditional Values",
    issuer: "Amity University, Uttar Pradesh, Lucknow Campus",
    date: "December 2025",
    description: "In acknowledgment of exceptional ethical integrity, outstanding traditional values, and peer leadership"
  },
  {
    id: "ha3",
    title: "Summer Analytics 2025 – Winner (First Rank Out of 1000+)",
    issuer: "Consulting and Analytics Club, IIT Guwahati",
    date: "September 2025",
    description: "Evaluated on end-to-end data pipelines, regression diagnostics, and gradient boosting benchmarks."
  },
  {
    id: "ha4",
    title: "AICraft 2.1 Hackathon – First Prize Winner",
    issuer: "Amity Centre for Artificial Intelligence, ACAI",
    date: "March 2025",
    description: "Developed and presented Smiriti: an interactive speech-language modeling AI for neurological disorders."
  },
  {
    id: "ha5",
    title: "Global Health Hackathon 2025 – 7th Place",
    issuer: "VIT Bhopal University & Johns Hopkins Center for Bioengineering",
    date: "February 2025",
    description: "Collaborated on non-invasive screening technologies with real-time computational diagnostics."
  },
  {
    id: "ha6",
    title: "American Society for Microbiology (ASM) Membership Grant",
    issuer: "American Society for Microbiology",
    date: "October 2025",
    description: "Awarded based on ongoing environmental metagenomics research in Sundarbans Mangrove microbial safety."
  },
  {
    id: "ha7",
    title: "BIO-COD@THON 2023 – Winner",
    issuer: "Praedictio, Bioinformatics Club, Amity University Lucknow",
    date: "September 2023",
    description: "First place for writing high-performance Bash and Python algorithms to catalog genome-drug interactions."
  }
];

export const leadershipActivities: LeadershipActivity[] = [
  {
    id: "lead1",
    role: "Mentor & Advisor",
    organization: "Reliance Foundation Postgraduate Scholars Mentorship Program",
    period: "2026",
    description: [
      "Selected as active postgraduate advisor for highly competitive Reliance Scholars nationwide.",
      "Guided and supported scholars in complex scientific project setups and professional engineering practices."
    ]
  },
  {
    id: "lead2",
    role: "Campus Ambassador",
    organization: "Techfest 2026, IIT Bombay",
    period: "2025 - 2026",
    description: [
      "Represented and organized outreach for Asia’s largest science and technology festival.",
      "Achieved a top rank under 312 amongst over 5,000 global national campus ambassadors."
    ]
  },
  {
    id: "lead3",
    role: "Aspire Leaders Fellow",
    organization: "Aspire Institute (Founded by Harvard University Faculty)",
    period: "January 2026",
    description: [
      "Selected for a highly competitive global leadership and career development initiative.",
      "Worked in inter-cultural cohorts solving global policy, environmental safety, and public health problems."
    ]
  },
  {
    id: "lead4",
    role: "Google Cloud Arcade Facilitator '25 (Cohort 2)",
    organization: "Google Cloud",
    period: "August 2025",
    description: [
      "Achieved Ultimate Milestone scoring 100% of the advanced Google Cloud architectural badges.",
      "Facilitated hands-on labs focusing on infrastructure-as-code, high-performance computing, and Gemini deployments."
    ]
  },
  {
    id: "lead5",
    role: "McKinsey Forward Fellow",
    organization: "McKinsey & Company",
    period: "July 2025",
    description: [
      "Completed intensive development sprints on problem-solving structured frameworks, analytical clarity, and adaptability."
    ]
  }
];

export const workshops: Workshop[] = [
  { id: "w1", title: "International Webinar on Multi-Omics Data Integration Using AI", organizer: "Amity Institute of Biotechnology", date: "March 11, 2026" },
  { id: "w2", title: "Transforming Healthcare with AI (In-person Intensive)", organizer: "Bengaluru, India", date: "March 16, 2026" },
  { id: "w3", title: "9th Advanced in silico Drug Design Workshop (4 ECTS Credit)", organizer: "Palacký University Olomouc, Czech Republic", date: "Jan 26–30, 2026" },
  { id: "w4", title: "Innovative Modeling of PROTACs using Molsoft Tools", organizer: "Advent Informatics Pvt. Ltd.", date: "Nov 18, 2025" },
  { id: "w5", title: "STEM Quest 3.0: High-Resolution Poster Presentation", organizer: "Youth STEM Initiative (YSI) × MedXplorer", date: "Dec 16, 2025 – Jan 15, 2026" },
  { id: "w6", title: "Solve For Goa – Real-World Developer Hackathon", organizer: "GDG Goa & PCCE", date: "January 26–27, 2026" },
  { id: "w7", title: "FISBi Summit 2025 – First Indonesian Structural Biology Summit", organizer: "Graha Widya Bhakti & Cryo-EM Lab", date: "December 11–12, 2025" },
  { id: "w8", title: "One Day Masterclass on Electrospinning Machine for Fabrication of Membrane & Nanofibres", organizer: "CSIR-Indian Institute of Toxicology Research (CSIR-IITR)", date: "November 2025" },
  { id: "w9", title: "SWEEP – Scientific Writing & Ethics in Enhancing Publication Success", organizer: "CSIR-IITR, Lucknow", date: "July 2025" },
  { id: "w10", title: "DECODE NATURE: DNA Barcoding Intensive Workshop", organizer: "Virtual Biology Consortium", date: "June 2025" },
  { id: "w11", title: "CompTox Chemicals Dashboard Training Module", organizer: "U.S. Environmental Protection Agency (EPA)", date: "June 2025" }
];

export const snapshots: Snapshot[] = [
  {
    id: "snap1",
    title: "AICTE Idea Lab",
    location: "AKTU Lucknow, India",
    tag: "Prototyping",
    desc: "Refining 3D printing parameters and electronic feedback loops for medical screening device enclosure and testing.",
    symbol: "🧬"
  },
  {
    id: "snap2",
    title: "Chandigarh University Presentation",
    location: "Punjab, India",
    tag: "Oral Presentation",
    desc: "Delivering research on 'Soil and Climatic Parameter Optimization' using multi-output LightGBM recommendation system to global agtech scholars.",
    symbol: "🎤"
  },
  {
    id: "snap3",
    title: "Rumi Darwaza Milestones",
    location: "Lucknow, India",
    tag: "Cultural Root",
    desc: "Investigating biomimetic design architecture patterns in historical Lucknow systems. Melding heritage with mathematical symmetry.",
    symbol: "🕌"
  },
  {
    id: "snap4",
    title: "Ganges Ghats",
    location: "Varanasi, India",
    tag: "Scientific Reflection",
    desc: "Sampling biofilm microbiomes and collecting spatial parameters for environmental water toxicity diagnostics models.",
    symbol: "🌊"
  }
];

export const editorialActivities = [
  "Review Committee Member, International Conference on Electrical, Computer, Communications and Mechatronics Engineer (ICECCME 2026)",
  "Review Committee Member, International Conference on Electrical, Computer and Energy Technologies (ICECET 2026)",
  "Editor, 'Artificial Intelligence and Computational Biology in Healthcare Genomics, Public Health and Microbiome'",
  "ASM Global Outreach Contributing Member, American Society for Microbiology (2025 - Present)",
  "External Reviewer, PLOS ONE Journal (Refereed and verified 11 high-impact manuscript reviews 2024 - Present)"
];
