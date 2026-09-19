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
    summary: "Worked as a Project Assistant at CSIR-IITR, developing AI-assisted computational workflows for drug discovery and chemical analysis. Developed ML-based approaches for protein-ligand docking analysis, linker ranking, and bioisostere identification using curated chemical and structure-based datasets. Applied scaffold-based analysis to characterize chemical relationships across publicly reported compounds. Developed structure-aware ML models for predicting metabolite profiles of parent compounds using molecular descriptors and molecular fingerprints. Critically evaluated how chemical structure, representation, and learned patterns influence computational predictions, integrating cheminformatics, molecular modelling, and machine learning to support hypothesis generation for drug discovery and toxicological research.",
    details: [
      "Developed a metabolism-aware, multi-task machine learning pipeline to predict multi-class skin toxicity for biomimetic parent compounds and metabolites.",
      "Translated complex toxicological outputs into an interpretable, AOP-aligned (Adverse Outcome Pathway) risk score.",
      "Utilized AI for drug repurposing, chemical scaffold analysis, linker design and ranking, and the identification of cryptic pockets."
    ],
    tags: [
      "Computational Drug Discovery",
      "Computer Aided Drug Design",
      "Cheminformatics",
      "Machine Learning",
      "Python (BioPython, Pandas, NumPy, etc.)",
      "RDKit",
      "Molecular Modeling"
    ]
  },
  {
    id: "exp2",
    institution: "Command Hospital, Lucknow",
    location: "Lucknow, India",
    role: "Research Intern",
    period: "Jan 2025 – May 2025",
    summary: "Contributed to a six-month interdisciplinary project on oral cancer risk-stage classification using multimodal clinical data, including patient parameters, buccal-cavity images and halitosis-related measurements. Developed reproducible Python workflows with Pandas, NumPy and Scikit-learn for preprocessing, feature engineering, model development and evaluation. Critically examined how complementary data modalities influenced predictive performance, interpretability and biological relevance. Collaborated with clinicians, oncologists and researchers to translate clinical knowledge into computational features and assess model limitations. This experience strengthened my ability to integrate medical imaging, clinical data and machine learning while approaching biomedical prediction with methodological rigor, critical reasoning and translational awareness.",
    details: [
      "Designed a multi-modal machine learning pipeline that successfully integrated disparate data sources, including complex clinical parameters, diagnostic medical imaging, and novel breath-based biomarkers.",
      "Bridged clinical pathology with computational predictive modeling to improve non-invasive screening accuracy."
    ],
    tags: [
      "Machine Learning",
      "Biological Data Analysis",
      "Predictive Modeling",
      "Data Preprocessing",
      "Python (BioPython, Pandas, NumPy, etc.)",
      "Scikit-Learn",
      "Medical Imaging",
      "Oral Cancer"
    ]
  },
  {
    id: "exp3",
    institution: "CSIR-Institute of Genomics and Integrative Biology",
    location: "New Delhi, India",
    role: "Research Intern (Bachelor's Thesis Project)",
    period: "Dec 2024 – May 2025",
    summary: "Conducted my undergraduate thesis at CSIR-IGIB, critically investigating deep-learning strategies for viral genome reconstruction using SARS-CoV-2 data. Developed an LSTM-based sequence prediction framework trained on k-mer representations to model nucleotide patterns and generate candidate contig extensions. Integrated forward and reverse sequencing information with user-provided contigs, applying iterative extension and sequence-quality assessment to determine reliable assembly boundaries. Evaluated the complementary roles of de novo assembly, reference-guided information, k-mer analysis and recurrent neural networks in addressing genome reconstruction challenges. This work strengthened my research skills in computational genomics, experimental workflow design, model interpretation and scientifically grounded evaluation of bioinformatics methods. Presented my dissertation research to the project group and faculty, earning an A+ grade for the undergraduate thesis.",
    details: [
      "Engineered and trained a specialized LLM on viral reference genomes to automate and predict viral contig extensions.",
      "Established rigorous computational validation protocols; utilized BLAST to verify generated sequences, achieving 99% similarity and proving zero hallucination in the synthesized viral genomic data."
    ],
    tags: [
      "Next-Generation Sequencing (NGS) Analysis",
      "Python (BioPython, Pandas, NumPy, etc.)",
      "Cancer Genomics",
      "Genome Assembly (SPAdes, MEGAHIT, hifiasm)",
      "Linux/Unix Command Line",
      "R (tidyverse, ggplot2, DESeq2, etc.)",
      "Artificial Intelligence (AI)",
      "WSL",
      "Python (Programming Language)"
    ]
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
    description: "Developed a multimodal AI framework for non-invasive oral cancer screening, integrating clinical information, diagnostic medical imaging, and breath-biomarker data to investigate complementary signals for early disease detection.",
    tags: ["Python", "NumPy", "Pandas", "scikit-learn", "PyTorch", "TensorFlow", "Matplotlib", "Medical Image Processing", "Multimodal Integration"],
    category: "Clinical Diagnostics",
    highlights: [
      "Curated and preprocessed heterogeneous datasets from public medical repositories and hospital-supported clinical data collection, collaborating with an oncologist at Command Hospital, Lucknow, to support clinically informed data preparation and validation.",
      "Implemented machine-learning and deep-learning pipelines using Python, NumPy, Pandas, scikit-learn, PyTorch and TensorFlow for feature processing, image analysis, multimodal learning and predictive-model development.",
      "Designed an interpretable evaluation workflow using statistical analysis and visualization to assess model performance and identify clinically relevant patterns across imaging, clinical and breath-derived features.",
      "Patent-derived device mapping [I.4]"
    ],
    imageUrl: "./p_1.png",
    status: "PATENTED"
  },
  {
    id: "proj02",
    projectNum: "02",
    title: "Metabolism-Aware Machine Learning for Skin Toxicity Prediction",
    description: "Developed a multi-task machine-learning framework to predict skin-toxicity endpoints while accounting for metabolic transformation, integrating parent compounds with experimentally reported metabolites to capture metabolism-dependent toxicological risk.",
    tags: ["Python", "RDKit", "scikit-learn", "PubChem", "ADMETlab", "SwissADME", "BIOVIA Discovery Studio", "BioTransformer", "AOP-Wiki/AOP Knowledge Base"],
    category: "Computational Toxicology",
    highlights: [
      "Curated compound and metabolite datasets from PubChem and the human metabolite database, generating molecular representations and physicochemical descriptors with RDKit for downstream predictive modelling.",
      "Integrated skin-permeation, ADMET and toxicity profiles using ADMETlab, SwissADME and licensed BIOVIA Discovery Studio, alongside Biotransformer-based metabolite prediction to evaluate compound–metabolite safety profiles.",
      "Mapped predicted toxicity outcomes to Adverse Outcome Pathways (AOPs) using the AOP-Wiki/AOP Knowledge Base, connecting molecular-level predictions with mechanistic toxicological processes and prioritizing compounds for further investigation."
    ],
    imageUrl: "./p_2.png"
  },
  {
    id: "proj03",
    projectNum: "03",
    title: "AI-Driven Drug Repurposing, Chemical Space Mapping & RNA Off-Target Profiling",
    description: "Developed an AI-enabled cheminformatics pipeline for drug repurposing and chemical-space analysis, integrating public compound records from PubChem with standardized molecular representations and 2D/3D structures generated using Open Babel and RDKit.",
    tags: ["Python", "RDKit", "Open Babel", "scikit-learn", "PCA/t-SNE/UMAP", "TMAP/GTM", "AutoDock Vina", "ADMETlab", "SwissADME"],
    category: "Cheminformatics",
    highlights: [
      "Computed physicochemical descriptors and molecular fingerprints including LogP, molecular weight, TPSA, H-bonding features, ECFP and MACCS fingerprints, followed by PCA, t-SNE and UMAP to characterize chemical diversity and identify structurally related compound regions.",
      "Extracted Bemis–Murcko scaffolds and applied hierarchical clustering to identify recurrent chemotypes, evaluate scaffold diversity and prioritize structurally distinct drug-like candidates using Lipinski and ADMET-based filters.",
      "Established an RNA off-target de-risking workflow combining Tanimoto similarity against known RNA-binding compounds, docking with AutoDock Vina, and ML-based classification using Random Forest, Gradient Boosting, SVM and XGBoost to prioritize compounds for multi-target virtual screening."
    ],
    imageUrl: "./p_3.png",
    status: "UNDER PUBLICATION"
  },
  {
    id: "proj05",
    projectNum: "05",
    title: "Deep Learning-Based Viral Genome Scaffolding",
    description: "Developed a deep-learning framework for viral contig extension and genome scaffolding using SARS-CoV-2 sequence data, modelling nucleotide patterns through k-mer representations and recurrent neural-network architectures.",
    tags: ["Python", "LSTM/RNN", "k-mer analysis", "BLAST", "Sequence Assembly", "Computational Genomics"],
    category: "Computational Genomics",
    highlights: [
      "Designed an iterative contig-extension workflow integrating forward and reverse sequencing information with user-provided contigs to generate candidate extensions and determine reliable assembly boundaries.",
      "Integrated de novo assembly, reference-guided information and sequence-quality assessment to compare complementary strategies for reconstructing incomplete viral genomes and evaluating candidate scaffolds.",
      "Validated generated sequences against reference genomes using BLAST, obtaining >99% sequence similarity for the evaluated reconstructed sequences and demonstrating high agreement with reference viral genomes."
    ],
    imageUrl: "./p_5.png",
    status: "THESIS"
  },
  {
    id: "proj06",
    projectNum: "06",
    title: "OncoGenRAG: AI-Based Genomic Variant Classification & Evidence Retrieval",
    description: "Developed OncoGenRAG, an oncology-focused RAG framework integrating parameter-efficient BioBERT fine-tuning with entity-aware retrieval for genomic variant classification and evidence-grounded interpretation.",
    tags: ["BioBERT", "RAG", "Transformers", "Genomics", "NLP", "Oncology"],
    category: "Bioinformatics & Generative AI",
    highlights: [
      "Curated and harmonized 933 records from CIViC, ClinVar/dbSNP, Open Targets, UniProtKB/Swiss-Prot, Ensembl Variation and linked PubMed literature into a multi-source oncology knowledge base.",
      "Fine-tuned BioBERT to classify variants into five clinical categories that includes Pathogenic, Likely Pathogenic, Variant of Uncertain Significance, Benign and Oncogenic, achieving 92.40% accuracy and 92.65% weighted F1 on held-out evaluation.",
      "Implemented evidence-aware retrieval using TF-IDF similarity and explicit gene, variant and cancer-type matching, achieving 94.5% Precision@1, 96.8% Precision@3 and 100% database grounding across 100 clinical-style queries."
    ],
    imageUrl: "./p_6.png",
    status: "UNDER PUBLICATION"
  },
  {
    id: "proj07",
    projectNum: "07",
    title: "AI-Assisted De Novo Drug Design for Colorectal Cancer",
    description: "Developed a computational drug-design workflow for colorectal cancer by mining approved therapeutics and reported bioactivity data from DrugBank, ChEMBL, Open Targets and BindingDB to establish disease-relevant chemical and target spaces.",
    tags: ["Python", "RDKit", "DrugBank", "ChEMBL", "Open Targets", "BindingDB", "BIOVIA Discovery Studio", "ADMETlab"],
    category: "Onco-Cheminformatics",
    highlights: [
      "Extracted drug-like scaffolds and pharmacophoric features from approved colorectal cancer therapeutics using RDKit and BIOVIA Discovery Studio to guide structure-informed generation and optimization of candidate molecules.",
      "Generated and screened candidate structures against physicochemical, drug-likeness and pharmacokinetic criteria, applying Lipinski-based filters and ADMETlab/BIOVIA toxicity assessments to remove unfavorable compounds.",
      "Prioritized non-toxic, drug-like candidates for further computational evaluation, using structural similarity, pharmacophore compatibility and predicted ADMET profiles to support rational lead selection."
    ],
    imageUrl: "./p_7.png",
    status: "UNDER PUBLICATION"
  },
  {
    id: "proj08",
    projectNum: "08",
    title: "Frontotemporal Dementia Phytochemical Discovery Platform",
    description: "Investigated molecular mechanisms and therapeutic opportunities in Frontotemporal Dementia (FTD) by integrating transcriptomic analysis, network biology and structure-based drug discovery to identify disease-associated targets and potential neuroprotective phytochemicals.",
    tags: ["R/Python", "GEO", "DESeq2", "Cytoscape", "CytoHubba", "PubChem", "PDB", "BIOVIA Discovery Studio", "PyMOL", "AutoDock Vina", "PLIP", "ADMETlab 3.0"],
    category: "Neurogenomics",
    highlights: [
      "Analyzed FTD transcriptomic datasets from GEO to identify differentially expressed genes and constructed protein-interaction networks, applying Cytoscape/CytoHubba to prioritize hub genes implicated in disease-associated molecular pathways.",
      "Curated neuroactive phytochemicals reported from Indian spices using PubChem and screened candidates using molecular weight, LogP, H-bonding properties, Lipinski's Rule of Five, Veber criteria and ADMETlab 3.0 to prioritize drug-like compounds with favorable predicted pharmacokinetic and toxicity profiles.",
      "Mapped prioritized genes to experimentally determined protein structures from PDB and performed structure-based virtual screening, preparing receptors with BIOVIA Discovery Studio/PyMOL and running automated ligand docking with AutoDock Vina, followed by interaction analysis using PLIP; Rosmarinic acid emerged as a prioritized phytochemical based on predicted receptor-binding interactions."
    ],
    imageUrl: "./p_8.png",
    status: "PUBLISHED",
    linkUrl: "https://doi.org/10.1101/2025.09.05.674389"
  },
  {
    id: "proj10",
    projectNum: "10",
    title: "Multiple Sclerosis Microbiome Analysis",
    description: "Investigated disease-associated alterations in the gut microbiome of Multiple Sclerosis (MS) patients by analyzing publicly available 16S rRNA sequencing datasets from MS patients and healthy controls.",
    tags: ["QIIME2", "DADA2", "16S rRNA", "Microbiome", "PERMANOVA", "Kruskal–Wallis", "ANCOM", "Metagenomics"],
    category: "Metagenomics",
    highlights: [
      "Processed raw microbiome sequencing data through a standardized QIIME2 workflow, incorporating quality control, denoising, taxonomic assignment and phylogenetic reconstruction to characterize microbial community composition.",
      "Quantified microbial diversity and community structure using alpha- and beta-diversity analyses, applying statistical testing including PERMANOVA and Kruskal–Wallis to assess differences between MS and control groups.",
      "Identified disease-associated microbial taxa using differential-abundance analysis with ANCOM, generating reproducible microbiome signatures that supported subsequent cross-cohort investigation of MS-associated dysbiosis."
    ],
    imageUrl: "./p_10.png",
    status: "PUBLISHED",
    linkUrl: "https://www.biorxiv.org/content/10.64898/2026.07.25.740724v1"
  },
  {
    id: "proj11",
    projectNum: "11",
    title: "Single-Cell Transcriptomics of Rhabdomyosarcoma",
    description: "Characterized cellular heterogeneity in Rhabdomyosarcoma using publicly available single-cell RNA-sequencing datasets, profiling malignant, immune and stromal populations to investigate the cellular architecture underlying tumor progression.",
    tags: ["R", "Python", "Seurat", "Scanpy", "SingleR", "Azimuth", "inferCNV", "PCA/UMAP", "ssGSEA", "GEO"],
    category: "Cancer Biology",
    highlights: [
      "Processed and analyzed single-cell transcriptomes using Seurat and Scanpy, performing quality control, normalization, highly variable gene selection, dimensionality reduction and unsupervised clustering to resolve distinct cellular populations.",
      "Annotated cell populations using SingleR/Azimuth and inferred large-scale copy-number alterations with inferCNV, distinguishing malignant tumor cells from non-malignant immune and stromal compartments.",
      "Integrated pathway-level analysis using ssGSEA to characterize transcriptional programs associated with tumor progression, identifying cell-state-specific pathways and candidate molecular targets for further investigation."
    ],
    imageUrl: "./p_11.png"
  },
  {
    id: "proj12",
    projectNum: "12",
    title: "Prostate Cancer Survival & Biomarker Discovery",
    description: "Investigated molecular biomarkers associated with prostate cancer prognosis by integrating transcriptomic datasets from GEO with TCGA clinical and gene-expression data to identify disease-associated molecular signatures.",
    tags: ["R", "Python", "limma", "TCGAbiolinks", "survival", "survminer", "Kaplan-Meier", "Cox Proportional Hazards", "Machine Learning"],
    category: "Oncology Data Science",
    highlights: [
      "Performed differential gene-expression analysis using limma and TCGAbiolinks, followed by functional and network-level analysis to identify candidate genes with potential diagnostic or prognostic relevance.",
      "Developed and optimized machine-learning models for biomarker selection, applying repeated hyperparameter tuning and model evaluation to identify robust transcriptomic features associated with patient outcomes.",
      "Evaluated prognostic associations using Kaplan–Meier and Cox proportional-hazards survival analyses, estimating survival differences, hazard ratios and prognostic performance across independent patient groups."
    ],
    imageUrl: "./p_12.png"
  },
  {
    id: "proj13",
    projectNum: "13",
    title: "Breast Cancer Copy Number Alteration Analysis",
    description: "Investigated genomic copy-number alterations associated with breast cancer progression and molecular subtypes, integrating segmented CNA profiles with clinical outcomes and PAM50 subtype information.",
    tags: ["R", "Python", "TCGA", "ggplot2", "matplotlib", "survival", "Cox Regression", "Pathway Enrichment", "Cancer Genomics"],
    category: "Cancer Genomics",
    highlights: [
      "Processed patient-level copy-number segments using Python/R workflows to identify recurrent chromosomal amplifications and deletions and quantify genomic instability across Luminal A, Luminal B, HER2-enriched and Basal-like tumors.",
      "Mapped recurrent CNA regions to candidate genes and functional pathways, evaluating the biological relevance of altered genomic regions through enrichment analysis and identifying alterations associated with tumor-specific molecular programs.",
      "Integrated CNA profiles with clinical outcomes using survival and Cox regression analyses, evaluating the prognostic relevance of recurrent copy-number patterns and characterizing differences in genomic architecture across breast cancer subtypes."
    ],
    imageUrl: "./p_13.png"
  },
  {
    id: "proj14",
    projectNum: "14",
    title: "Autism Spectrum Disorder Biomarker Discovery",
    description: "Investigated reproducible blood-based transcriptomic signatures associated with Autism Spectrum Disorder (ASD) by integrating independent GEO gene-expression datasets comparing ASD and control cohorts.",
    tags: ["R", "Python", "GEO", "limma", "Cytoscape", "CytoHubba", "scikit-learn", "SHAP", "Enrichr", "LODO Validation", "Neurogenomics"],
    category: "Neurogenomics",
    highlights: [
      "Performed differential-expression analysis using limma and network-based hub-gene analysis with Cytoscape/CytoHubba, identifying disease-associated genes and biological pathways consistently represented across independent studies.",
      "Developed and evaluated machine-learning models for biomarker selection using leave-one-dataset-out (LODO) validation, testing the ability of candidate transcriptomic features to generalize across independent cohorts rather than relying solely on within-dataset performance.",
      "Applied SHAP-based model interpretation and functional-enrichment analysis to identify stable predictive features and characterize their biological roles, prioritizing reproducible blood-based candidate biomarkers for ASD."
    ],
    imageUrl: "./p_14.png"
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
    title: "Altered Gut Microbiome Composition of Streptococcaceae and Lachnospiraceae in Multiple Sclerosis Patients",
    source: "EuroBioC 2026",
    date: "June 3-5, 2026",
    type: "conference",
    status: "Poster Presentation · Abstract Selected · Fully Funded",
    description: "Presented an abstract-selected poster on cross-cohort gut microbiome alterations in Multiple Sclerosis, highlighting disease-associated changes in Streptococcaceae and Lachnospiraceae and communicating computational microbiome findings to an international bioinformatics research audience."
  },
  {
    id: "pub_c2",
    key: "C.2",
    authors: "Amaan Arif",
    title: "Altered Gut Microbiome Composition of Streptococcaceae and Lachnospiraceae in Multiple Sclerosis Patients",
    source: "IABSCON 2026 - XIV Annual Conference of the Indian Academy of Biomedical Sciences, BITS Pilani, K. K. Birla Goa Campus, Goa, India",
    date: "24-26 Mar 2026",
    type: "conference",
    status: "Poster Presentation · Abstract Selected · Fully Funded",
    description: "Presented research on altered gut microbiome composition of Streptococcaceae and Lachnospiraceae in Multiple Sclerosis, communicating microbiome profiling findings from human 16S rRNA sequencing data at an international biomedical research conference; also participated in the associated CME programme on hands-on meta-analysis in biomedical sciences."
  },
  {
    id: "pub_c3",
    key: "C.3",
    authors: "Amaan Arif",
    title: "Machine Learning-Driven Framework for Precision Crop and Fertilizer Recommendation Using Soil and Climatic Parameters",
    source: "ICSAHSE 2026 - International Conference on Smart Agriculture, Healthcare & Sustainable Energy, Chandigarh University, Punjab, India",
    date: "03-05 Feb 2026",
    type: "conference",
    status: "Poster Presentation · Research Work",
    description: "Presented an original machine-learning framework for precision crop and fertilizer recommendation, integrating soil and climatic parameters to develop a data-driven approach for agricultural decision-making and demonstrating the application of computational methods to biological and environmental datasets."
  },
  {
    id: "pub_c4",
    key: "C.4",
    authors: "Amaan Arif",
    title: "AI-Powered Toxicity Profiling of Veterinary Drugs and Feed Additives: A Predictive Framework for Livestock Safety",
    source: "2nd World Congress on Animal Science & Veterinary Medicine, Bangkok, Thailand",
    date: "03-04 Nov 2025",
    type: "conference",
    status: "Virtual Oral Presentation · Fully Funded Registration",
    description: "Presented an AI-driven framework for toxicity profiling of veterinary drugs and feed additives, applying computational prediction approaches to investigate chemical safety and support data-driven risk assessment in livestock health."
  },
  {
    id: "pub_c5",
    key: "C.5",
    authors: "Amaan Arif",
    title: "AI-Driven Linguistic Modelling for Neurodevelopmental Disorders",
    source: "5th International Paris Congress on Applied Sciences, Paris, France",
    date: "Aug 04-08, 2025",
    type: "conference",
    status: "Virtual Presentation · Fully Funded Registration",
    description: "Presented research on AI-driven linguistic modelling for neurodevelopmental disorders, exploring computational language modelling approaches for the analysis and prediction of disorder-associated patterns."
  },
  {
    id: "pub_c6",
    key: "C.6",
    authors: "Amaan Arif",
    title: "Role of Cloud Computing in High-Throughput Genome Assembly",
    source: "ICETIT-25 - International Conference on Emerging Trends in Information Technology, Amity University Uttar Pradesh, Lucknow",
    date: "24-25 April 2025",
    type: "conference",
    status: "Virtual Presentation · Review Research",
    description: "Presented a review on the role of cloud computing in high-throughput genome assembly, synthesizing computational approaches for scalable genomic-data processing and connecting the work with undergraduate thesis research."
  },
  {
    id: "pub_c7",
    key: "C.7",
    authors: "Amaan Arif",
    title: "AI-Powered Toxicity Prediction: Transforming Chemical Risk Assessment with Machine Learning Models",
    source: "7th International İstanbul Contemporary Scientific Research Congress, İstanbul, Türkiye",
    date: "2025",
    type: "conference",
    status: "Virtual Presentation · Fully Funded",
    description: "Presented an AI-based toxicity-prediction framework for chemical risk assessment, investigating machine-learning approaches for computational toxicology and predictive evaluation of chemical safety."
  },
  {
    id: "pub_c8",
    key: "C.8",
    authors: "Amaan Arif",
    title: "Deep Sight: Revolutionizing Eye Disease Diagnosis through Advanced CNN-Based Retinal Image Classification",
    source: "4th International Conference on Material Science & Engineering, Vienna, Austria",
    date: "2025",
    type: "conference",
    status: "Virtual Presentation · Independent Research",
    description: "Presented “Deep Sight: Revolutionizing Eye Disease Diagnosis through Advanced CNN-Based Retinal Image Classification,” demonstrating the application of convolutional neural networks to automated medical-image classification and computational disease screening."
  },
  {
    id: "pub_c9",
    key: "C.9",
    authors: "Amaan Arif",
    title: "Revolutionizing Ophthalmology with Deep Learning: Automated Retinal Image Classification for Disease Diagnosis",
    source: "3rd European Congress on Biomedical Science & Engineering, Vienna, Austria",
    date: "2025",
    type: "conference",
    status: "Virtual Presentation · Research Presentation",
    description: "Presented research on deep-learning-based retinal image classification for ophthalmic disease diagnosis, developing a computational imaging approach for automated disease recognition from retinal photographs."
  },
  {
    id: "pub_c10",
    key: "C.10",
    authors: "Amaan Arif",
    title: "Deep Learning in Neuroomics: Advances in Brain Mapping and Disease Prediction",
    source: "14th International Mardin Artuklu Scientific Researches Conference, Mardin, Türkiye",
    date: "2025",
    type: "conference",
    status: "Symposium Presentation · Independent Review Research",
    description: "Presented a review on deep learning in neuroomics, examining computational approaches for brain mapping, neurobiological data analysis and disease-prediction applications."
  },
  {
    id: "pub_c11",
    key: "C.11",
    authors: "Amaan Arif",
    title: "Microbiota and AI",
    source: "International Scientific Symposium on Health & Environment, CSIR-IITR, Lucknow, India",
    date: "2025",
    type: "conference",
    status: "Oral Presentation · Poster/Research Communication",
    description: "Presented “Microbiota and AI,” synthesizing microbiome research from undergraduate research training and examining the application of artificial intelligence to microbiome-associated biomedical investigations."
  },
  {
    id: "pub_c12",
    key: "C.12",
    authors: "Amaan Arif",
    title: "Transcriptomic Profiling Reveals the Key Role of the HDAC1 Gene in Frontotemporal Dementia",
    source: "ISAD 2023 - Innovations and State of the Art in Alzheimer’s & Dementia, Barcelona, Spain",
    date: "2023",
    type: "conference",
    status: "International Conference · Research Presentation · Selected/Fully Funded",
    description: "Presented “Transcriptomic Profiling Reveals the Key Role of the HDAC1 Gene in Frontotemporal Dementia,” reporting transcriptome-based investigation of disease-associated molecular signatures and candidate regulatory mechanisms."
  },
  {
    id: "pub_c13",
    key: "C.13",
    authors: "Amaan Arif",
    title: "Transcriptome Network Biology Reveals the Neuroprotective Potential of Rosmarinic Acid Against Frontotemporal Dementia",
    source: "International Conference on Integrating AI, Spirituality, Health Care & Management, Amity University Uttar Pradesh, Lucknow",
    date: "2023",
    type: "conference",
    status: "Oral Presentation · Research Presentation",
    description: "Presented “Transcriptome Network Biology Reveals the Neuroprotective Potential of Rosmarinic Acid Against Frontotemporal Dementia,” communicating findings from a 45-day research internship integrating transcriptomic and network-biology approaches with computational phytochemical investigation."
  },
  {
    id: "pub_c14",
    key: "C.14",
    authors: "Amaan Arif",
    title: "Machine Learning-Based Dementia Prediction Using Clinical Data: Non-Invasive Approach for Early Detection and Management",
    source: "International Conference on Neurology and Neuro Disorders, Amity University Noida & IUPUI, USA",
    date: "2023",
    type: "conference",
    status: "Oral Presentation · Fully Funded",
    description: "Presented a machine-learning-based approach for dementia prediction using clinical data, investigating non-invasive computational strategies for identifying disease-associated patterns and supporting early-risk assessment."
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
