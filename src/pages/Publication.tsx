import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PageHeader } from '@/components/layout/PageHeader';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/useInView';
import batio3 from '@/assets/batio3.jpg';
import m3d from '@/assets/m3d.png';
import reconfig from '@/assets/reconfig.jpg';
import proton from '@/assets/proton.png';

interface PublicationItem {
  title: string;
  journal: string;
  volume?: string;
  year: string;
  coverImage?: string;
  doi?: string;
  hasCover?: boolean;
}

interface Publication {
  title: string;
  authors: string;
  journal: string;
  volume?: string;
  year: number;
  doi?: string;
  featured?: boolean;
  coverImage?: string;
  hasCover?: boolean;
}

const highlightedPublications: PublicationItem[] = [
  {
    title: 'Single-crystalline BaTiO3-based ferroelectric capacitive memory via membrane transfer',
    journal: 'Science Advances',
    volume: 'Vol.11, eadz2553 (2025)',
    year: '',
    coverImage: batio3,
    doi: 'https://www.science.org/doi/10.1126/sciadv.adz2553',
    hasCover: false,
  },
  {
    title: 'Monolithic 3D integration of 2D materials-based electronics towards ultimate edge computing solutions',
    journal: 'Nature Materials',
    volume: 'Vol. 22, 1470-1477 (2023)',
    year: '',
    coverImage: m3d,
    doi: 'https://www.nature.com/articles/s41563-023-01704-z',
    hasCover: true,
  },
  {
    title: 'Reconfigurable heterogeneous integration using stackable chips with embedded artificial intelligence',
    journal: 'Nature Electronics',
    volume: 'Vol. 5, 386-393 (2022)',
    year: '',
    coverImage: reconfig,
    doi: 'https://www.nature.com/articles/s41928-022-00778-y',
    hasCover: true,
  },
  {
    title: 'Proton-enabled activation of peptide materials for biological bimodal memory',
    journal: 'Nature Communications',
    volume: 'Vol. 11, 5896 (2020)',
    year: '',
    coverImage: proton,
    doi: 'https://www.nature.com/articles/s41467-020-19750-5',
    hasCover: false,
  },
];

const journalPublications: Publication[] = [
  {
    title: 'Recent Progress of Oxide Semiconductor-Based Artificial Synaptic Transistors',
    authors: 'Sein Lee, Jeong-Min Park, Wooho Ham, Junseo Lee, Gyeong-Hun Hwang, Seok Daniel Namgung, Min-Kyu Song, Jang-Yeon Kwon*',
    journal: 'ACS Applied Electronic Materials',
    volume: 'Vol.8, 1952-1972 (2026)',
    year: 2026,
    doi: 'https://pubs.acs.org/doi/full/10.1021/acsaelm.5c01798',
    },
    {
    title: 'Recent Progress of Proton Involvement and Coupling for Bio-realistic Synaptic Device',
    authors: 'Yubeen Park, Jung-El Ryu, Seok Daniel Namgung*, Min-Kyu Song*',
    journal: 'Nanoscale',
    volume: 'Vol.18, 145-158 (2026)',
    year: 2026,
    doi: 'https://pubs.rsc.org/en/content/articlelanding/2025/nr/d5nr03090k',
    },
    {
      title: 'Atomic lift-off of epitaxial membranes for cooling-free infrared detection',
      authors: 'Xinyuan Zhang, Owen Ericksen, Sangho Lee, Marx Akl, Min-Kyu Song, Haihui Lan, Jun Min Suh, Shane Lindemann, Jung-El Ryu, Xudong Zheng, Ne Myo Han, Bikram Bhatia, Hyunseok Kim, Hyun S. Kum, Celesta S. Chang*, Yunfeng Shi*, Chang-Beom Eom*, Jeehwan Kim*',
      journal: 'Nature',
      volume: 'Vol. 641, 98-105 (2025)',
      year: 2025,
      doi: 'https://www.nature.com/articles/s41586-025-08874-7',
    },
    {
    title: 'Single-crystalline BaTiO3-based ferroelectric capacitive memory via membrane transfer',
    authors: 'Xinyuan Zhang, Sangho Lee, Jung-El Ryu, Jun Min Suh, Tae-Hyeon Kim, Matthew R. Barone, Nicholas Andrew Parker, Giho Lee, Ik-Jyae Kim, Injune Yeo, Jiho Shin, Jang-Sik Lee, Darrell G. Schlom, Celesta S. Chang, Jae-sun Seo, Shimeng Yu, Min-Kyu Song*, Jeehwan Kim*',
    journal: 'Science Advances',
    volume: 'Vol.11, eadz2553 (2025)',
    year: 2025,
    doi: 'https://www.science.org/doi/10.1126/sciadv.adz2553',
    },
    {
      title: 'Van der Waals integration of 2D materials for advanced intelligent computing',
      authors: 'Chaehyeon Kwak, Keunpyo Park, Min-Kyu Song, Ho Won Jang*, Jun Min Suh*',
      journal: 'Neuromorphic Computing and Engineering',
      volume: 'Vol.5, 042002 (2025)',
      year: 2025,
      doi: 'https://iopscience.iop.org/article/10.1088/2634-4386/ae294e',
    },
    {
    title: 'In-cell neuromorphic computing in solid oxide fuel cells for bifunctional electrochemical power generation and artificial intelligence',
    authors: 'Haewon Seo†, Min-Kyu Song†, Hyun Woo Ko†, Ji-Hoon Kang†, Giho Lee, Sun-Young Park, Hyunwoo J. Kim, Sungchul Mun, Min-Chul Park*, Kyung Joong Yoon*',
    journal: 'Cell Reports Physical Science',
    volume: 'Vol.6, 102966 (2025)',
    year: 2025,
    doi: 'https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864%2825%2900565-X',
    },
    {
    title: 'Ultralow-Power Peptide-Based Memristor Enabled by Emulation of Proton-Mediated Synaptic Signaling',
    authors: 'Jeong Hyun Yoon, Wooho Ham, Kyung Jun Park, Seok Daniel Namgung, Min-Kyu Song*, Jang-Yeon Kwon*',
    journal: 'Small Methods',
    volume: 'Vol.9, e01472 (2025)',
    year: 2025,
    doi: 'https://onlinelibrary.wiley.com/doi/10.1002/smtd.202501472',
    },
    {
    title: 'High-Performance Oxide Thin-Film Transistors with Atomic-Layer-Deposition-Grown HfO2/BeO Heterodielectrics',
    authors: 'Sein Lee, Yoonseo Jang, Wooho Ham, Jonghyun Bae, Kyunghwan Kim, Jeong-Min Park, Junseo Lee, Min-Kyu Song, Dohwan Jung, Prakash R. Sultane, Jae-Hoon Han, Christopher W. Bielawski, Jungwoo Oh*, Jang-Yeon Kwon*',
    journal: 'Nano Letters',
    volume: 'Vol. 25, 6975–6982 (2025)',
    year: 2025,
    doi: 'https://pubs.acs.org/doi/10.1021/acs.nanolett.5c00552',
    },
    {
    title: 'Growth-based monolithic 3D integration of single-crystal 2D semiconductors',
    authors: 'Ki Seok Kim, Seunghwan Seo, Junyoung Kwon, Doyoon Lee, Changhyun Kim, Jung-El Ryu, Jekyung Kim, Jun Min Suh, Hang-Gyo Jung, Youhwan Jo, June-Chul Shin, Min-Kyu Song, Jin Feng, Hogeun Ahn, Sangho Lee, Kyeongjae Cho, Jongwook Jeon, Minsu Seol*, Jin-Hong Park*, Sang Won Kim*, Jeehwan Kim*',
    journal: 'Nature',
    volume: 'Vol. 636, 615-621 (2024)',
    year: 2024,
    doi: 'https://www.nature.com/articles/s41586-024-08236-9',
    },
    {
      title: 'The future of two-dimensional semiconductors beyond Moore’s law',
      authors: 'Ki Seok Kim, Junyoung Kwon, Huije Ryu, Changhyun Kim, Hyunseok Kim, Eun-Kyu Lee, Doyoon Lee, Seunghwan Seo, Jun Min Suh, Jekyung Kim, Min-Kyu Song, Sangho Lee, Minsu Seol*, Jeehwan Kim*',
      journal: 'Nature Nanotechnology',
      volume: 'Vol. 19, 895-906 (2024)',
      year: 2024,
      doi: 'https://www.nature.com/articles/s41565-024-01695-1',
    },
    {
      title: 'Proton-Modulated Resistive Switching in a Synapse-Like Tyrosine-Rich Peptide-Based Memristor',
      authors: 'Jeong Hyun Yoon, Min-Kyu Song, Wooho Ham, Kyung Jun Park, Jeong-Min Park, Seok Daniel Namgung, Jang-Yeon Kwon*',
      journal: 'Advanced Functional Materials',
      volume: 'Vol. 35, 2415222 (2024)',
      year: 2024,
      doi: 'https://advanced.onlinelibrary.wiley.com/doi/10.1002/adfm.202415222',
      },
    {
    title: 'Route to Enhancing Remote Epitaxy of Perovskite Complex Oxide Thin Films',
    authors: 'Sangho Lee, Xinyuan Zhang, Pooya Abdollahi, Matthew R. Barone, Chengye Dong, Young Jin Yoo, Min-Kyu Song, Doyoon Lee, Jung-El Ryu, Jun-Hui Choi, Jae-Hyun Lee, Joshua A. Robinson, Darrell G. Schlom, Hyun S. Kum, Celesta S. Chang*, Ambrose Seo*, Jeehwan Kim*',
    journal: 'ACS Nano',
    volume: 'Vol. 18, 31225–31233 (2024)',
    year: 2024,
    doi: 'https://pubs.acs.org/doi/10.1021/acsnano.4c09445',
    },
    {
    title: 'Thermal Dehydrogenation Impact on Positive Bias Stability of Amorphous InSnZnO Thin-Film Transistors',
    authors: 'Sein Lee, Young-Woong Song, Jeong-Min Park, Junseo Lee, Wooho Ham, Min-Kyu Song, Seok Daniel Namgung, Dongwook Shin, Jang-Yeon Kwon*',
    journal: 'ACS Applied Materials & Interfaces',
    volume: 'Vol. 16, 61169-61178 (2024)',
    year: 2024,
    doi: 'https://pubs.acs.org/doi/10.1021/acsami.4c03689',
    },
    {
    title: 'Mixed-dimensional integration of 3D-on-2D heterostructures for advanced electronics',
    authors: 'Sangho Lee†, Min-Kyu Song†, Xinyuan Zhang†, Jun Min Suh, Jung-El Ryu, Jeehwan Kim*',
    journal: 'Nano Letters',
    volume: 'Vol. 24, 9117-9128 (2024)',
    year: 2024,
    doi: 'https://pubs.acs.org/doi/full/10.1021/acs.nanolett.4c02663',
    },
    {
    title: 'Low-Power, Linear, and Uniform Bimodal Resistive Switching in Proton Conducting/Insulating Bilayer-Based Memristor',
    authors: 'Jeong Hyun Yoon, Min-Kyu Song, Young-Woong Song, Jeong-Min Park, Jang-Yeon Kwon*',
    journal: 'Journal of Alloys and Compounds',
    volume: 'Vol. 989, 174251 (2024)',
    year: 2024,
    doi: 'https://www.sciencedirect.com/science/article/pii/S0925838824008387',
    },
    {
    title: 'Monolithic 3D integration of 2D materials-based electronics towards ultimate edge computing solutions',
    authors: 'Ji-Hoon Kang†, Heechang Shin†, Ki Seok Kim†, Min-Kyu Song†, Doyoon Lee, Yuan Meng, Chanyeol Choi, Jun Min Suh, Beom Jin Kim, Hyunseok Kim, Anh Tuan Hoang, Bo-In Park, Guanyu Zhou, Suresh Sundaram, Phuong Vuong, Jiho Shin, Jinyeong Choe, Zhihao Xu, Rehan Younas, Justin S. Kim, Sangmoon Han, Sangho Lee, Sun Ok Kim, Beomseok Kang, Seungju Seo, Hyojung Ahn, Seunghwan Seo, Kate Reidy, Eugene Park, Sungchul Mun, Min-Chul Park, Suyoun Lee, Hyung-Jun Kim, Hyun S. Kum, Peng Lin, Christopher Hinkle, Abdallah Ougazzaden, Jong-Hyun Ahn*, Jeehwan Kim*, Sang-Hoon Bae*',
    journal: 'Nature Materials',
    volume: 'Vol. 22, 1470-1477 (2023)',
    year: 2023,
    doi: 'https://www.nature.com/articles/s41563-023-01704-z',
    },
    {
      title: 'Vertical full-colour micro-LEDs via 2D materials-based layer transfer',
      authors: 'Jiho Shin, Hyunseok Kim, Suresh Sundaram, Junseok Jeong, Bo-In Park, Celesta Chang, Joonghoon Choi, Taemin Kim, Mayuran Saravanapavanantham, Kuangye Lu, Sungkyu Kim, Jun Min Suh, Ki Seok Kim, Min-Kyu Song, Yunpeng Liu, Kuan Qiao, Jae Hwan Kim, Yeongin Kim, Ji-Hoon Kang, Jekyung Kim, Doeon Lee, Jaeyong Lee, Justin Kim, Han Eol Lee, Hanwool Yeon, Hyun Kum, Sang-Hoon Bae, Vladimir Bulovic, Ki Jun Yu, Kyusang Lee*, Kwanghun Chung*, Young Joon Hong*, Abdallah Ougazzaden*, Jeehwan Kim*',
      journal: 'Nature',
      volume: 'Vol. 614, 81–87 (2023)',
      year: 2023,
      doi: 'https://www.nature.com/articles/s41586-022-05612-1',
    },
    {
    title: 'Recent Advances and Future Prospects for Memristive Materials, Devices and Systems',
    authors: 'Min-Kyu Song†, Ji-Hoon Kang†, Xinyuan Zhang, Wonjae Ji, Alon Ascoli, Ioannis Messaris, Ahmet Samil Demirkol, Bowei Dong, Samarth Aggarwal, Weier Wan, Seok-Man Hong, Suma George Cardwell, Irem Boybat, Jae-sun Seo, Jang-Sik Lee, Mario Lanza, Hanwool Yeon, Murat Onen, Ju Li, Bilge Yildiz, Jesús A. del Alamo, Seyoung Kim, Shinhyun Choi, Gianluca Milano, Carlo Ricciardi, Lambert Alff, Yang Chai, Zhongrui Wang, Harish Bhaskaran, Mark C. Hersam, Dmitri Strukov, H.-S. Phillip Wong, Ilia Valov, Bin Gao, Huaqiang Wu, Ronald Tetzlaff, Abu Sebastian, Wei Lu, Leon Chua, J. Joshua Yang, Jeehwan Kim*',
    journal: 'ACS Nano',
    volume: 'Vol. 17, 11994-12039 (2023)',
    year: 2023,
    doi: 'https://pubs.acs.org/doi/10.1021/acsnano.3c03505',
    },
    {
      title: 'Phenol-assisted electrochemical metallization of peptide-based bimodal memristors',
      authors: 'Min-Kyu Song†, Seok Daniel Namgung†, Jun Min Suh, Jeong Hyun Yoon, Ki Tae Nam, Jang-Yeon Kwon*',
      journal: 'ACS Materials Letters',
      volume: 'Vol. 6, 275-280 (2023)',
      year: 2023,
      doi: 'https://pubs.acs.org/doi/10.1021/acsmaterialslett.3c01241',
    },
    {
    title: 'Vertically Extended Channel Architecture for Implementing a Photolithographically Scalable Thin-Film Transistor',
    authors: 'Sein Lee, Taehoon Sung, Se-Yeon Jung, Young-Woong Song, Min-Kyu Song, Wooho Ham, Jeong-Min Park, Jeong Hyun Yoon, Jang-Yeon Kwon*',
    journal: 'IEEE Electron Device Letters',
    volume: 'Vol. 44, 1296-1299 (2023)',
    year: 2023,
    doi: 'https://ieeexplore.ieee.org/document/10153078/',
    },
    {
    title: 'Tyrosine-mediated analog resistive switching for artificial neural networks',
    authors: 'Min-Kyu Song†, Seok Daniel Namgung†, Hojung Lee, Jeong Hyun Yoon, Young-Woong Song, Kang Hee Cho, Yoon-Sik Lee, Jong-Seok Lee, Ki Tae Nam, Jang-Yeon Kwon*',
    journal: 'Nano Research',
    volume: 'Vol. 16, 858-864 (2023)',
    year: 2023,
    doi: 'https://link.springer.com/article/10.1007/s12274-022-4760-1',
    },
    {
    title: 'Doping modulated ion hopping in tantalum oxide based resistive switching memory for linear and stable switching dynamics',
    authors: 'Young-Woong Song, Yun-Hee Chang, Jaeho Choi, Min-Kyu Song, Jeong Hyun Yoon, Sein Lee, Se-Yeon Jung, Wooho Ham, Jeong-Min Park, Hyun-Suk Kim, Jang-Yeon Kwon*',
    journal: 'Applied Surface Science',
    volume: 'Vol. 631, 157356 (2023)',
    year: 2023,
    doi: 'https://www.sciencedirect.com/science/article/pii/S0169433223010346',
    },
    {
    title: 'Reconfigurable heterogeneous integration using stackable chips with embedded artificial intelligence',
    authors: 'Chanyeol Choi†, Hyunseok Kim†, Ji-Hoon Kang†, Min-Kyu Song†, Hanwool Yeon, Celesta S. Chang, Jun Min Suh, Jiho Shin, Kuangye Lu, Bo-In Park, Yeongin Kim, Han Eol Lee, Doyoon Lee, Jaeyong Lee, Ikbeom Jang, Subeen Pang, Kanghyun Ryu, Sang-Hoon Bae, Yifan Nie, Hyun S. Kum, Min-Chul Park, Suyoun Lee, Hyung-Jun Kim, Huaqiang Wu*, Peng Lin*, Jeehwan Kim*',
    journal: 'Nature Electronics',
    volume: 'Vol. 5, 386-393 (2022)',
    year: 2022,
    doi: 'https://www.nature.com/articles/s41928-022-00778-y',
    },
    {
    title: 'Circularly Polarized Light-Sensitive, Hot Electron Transistor with Chiral Plasmonic Nanoparticles',
    authors: 'Seok Daniel Namgung, Ryeong Myeong Kim, Yae-Chan Lim, Jong Woo Lee, Nam Heon Cho, Hyeohn Kim, Jin-Suk Huh, Hanju Rhee, Sanghee Nah, Min-Kyu Song, Jang-Yeon Kwon, Ki Tae Nam*',
    journal: 'Nature Communications',
    volume: 'Vol. 13, 5081 (2022)',
    year: 2022,
    doi: 'https://www.nature.com/articles/s41467-022-32721-2',
    },
    {
    title: 'Humidity-induced synaptic plasticity of ZnO artificial synapses using peptide insulator for neuromorphic computing',
    authors: 'Min-Kyu Song, Hojung Lee, Jeong Hyun Yoon, Young-Woong Song, Seok Daniel Namgung, Taehoon Sung, Yoon-Sik Lee, Jong-Seok Lee, Ki Tae Nam, Jang-Yeon Kwon*',
    journal: 'Journal of Materials Science & Technology',
    volume: 'Vol. 119, 150-155 (2022)',
    year: 2022,
    doi: 'https://www.sciencedirect.com/science/article/pii/S1005030222001219?casa_token=ySgvWvTqMD0AAAAA:fecHPSNDIfal9C2pcisz9MZ3fj5tEFm-E8RVdMXFCViEGqmCC3mrHsjMFP2G6xVyteMa-f2_dlRF',
    },
    {
    title: 'Vertical Metal-Oxide Electrochemical Memory for High-Density Synaptic Array Based High-Performance Neuromorphic Computing',
    authors: 'Hyunjoon Lee, Da Gil Ryu, Giho Lee, Min-Kyu Song, Hyungjin Moon, Jaehyeong Lee, Jongchan Ryu, Ji-Hoon Kang, Junmin Suh, Sangbum Kim, Jongwoo Lim, Dongsuk Jeon, Seyoung Kim*, Jeehwan Kim*, Yun Seog Lee*',
    journal: 'Advanced Electronic Materials',
    volume: 'Vol. 8, 2200378 (2022)',
    year: 2022,
    doi: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aelm.202200378?casa_token=ry5EskfGPigAAAAA%3A5v8rsm_OGmy_01Ez8Pz13HupNt9_hckc_mIYIAWxo7lhS5cl0_Gee850RyqkrE4xPG0ExJuXiOsrLgJJ',
    },
    {
    title: 'Vacuum-free solution-based metallization (VSM) of a-IGZO using trimethylaluminium solution',
    authors: 'Taehoon Sung, Min-Kyu Song, Se-Yeon Jung, Sein Lee, Young-Woong Song, Solah Park, Jang-Yeon Kwon*',
    journal: 'RSC Advances',
    volume: 'Vol. 12, 3518-3523 (2022)',
    year: 2022,
    doi: 'https://pubs.rsc.org/en/content/articlehtml/2022/ra/d2ra00217e',
    },
    {
    title: 'Synaptic transistors based on a tyrosine-rich peptide for neuromorphic computing',
    authors: 'Min-Kyu Song, Young-Woong Song, Taehoon Sung, Seok Daniel Namgung, Jeong Hyun Yoon, Yoon-Sik Lee, Ki Tae Nam, Jang-Yeon Kwon*',
    journal: 'RSC Advances',
    volume: 'Vol. 11, 39619-39624 (2021)',
    year: 2021,
    doi: 'https://pubs.rsc.org/en/content/articlehtml/2021/ra/d1ra06492d',
    },
    {
    title: 'Encapsulation-enhanced switching stability of MoS2 memristors',
    authors: 'Young-Woong Song, Min-Kyu Song, Daehwan Choi, Jang-Yeon Kwon*',
    journal: 'Journal of Alloys and Compounds',
    volume: 'Vol. 885, 161016 (2021)',
    year: 2021,
    doi: 'https://www.sciencedirect.com/science/article/pii/S0925838821024257?casa_token=qDjcmSHmIMEAAAAA:5e-ReoJ5-5SGGVNGPUPsIekfcA22VFnDdWB-Y4_zXbWJnfkLLwnannveJ6f-8Y04ICNBN75QdiZt',
    },
    {
    title: 'Effect of X-ray irradiation on a-IGZO and LTPS thin-film transistors for radiography applications',
    authors: 'Solah Park, Min-Kyu Song, Jang-Yeon Kwon*',
    journal: 'Applied Surface Science',
    volume: 'Vol. 550, 149237 (2021)',
    year: 2021,
    doi: 'https://www.sciencedirect.com/science/article/pii/S0169433221003135?casa_token=Lpqeg2jY8kUAAAAA:KWPccsCQWj3eJCLFIMEyYZ8bqVaWRT8lfxiIzAyLVeNWO5XiEm3c9QlFHwO5c2RVoGRLgb65qEoS',
    },
    {
    title: 'Fully degradable memristors and humidity sensors based on a tyrosine-rich peptide',
    authors: 'Min-Kyu Song, Seok Daniel Namgung, Young-Woong Song, Taehoon Sung, Wonjae Ji, Yoon-Sik lee, Ki Tae Nam, Jang-Yeon Kwon*',
    journal: 'ACS Applied Electronic Materials',
    volume: 'Vol. 3, 3372-3378 (2021)',
    year: 2021,
    doi: 'https://pubs.acs.org/doi/full/10.1021/acsaelm.1c00357?casa_token=J0B-5xJSN3MAAAAA%3AOL1WZOsBK0FT3CxuZJNnisF0eFLq7gUX6wSoAWamIluJ2O7dlHujkhls92lTOHhEXiU9zIRnzrTiDVGDXw',
    },
    {
    title: 'Proton-enabled activation of peptide materials for biological bimodal memory',
    authors: 'Min-Kyu Song, Seok Daniel Namgung, Daehwan Choi, Hyeohn Kim, Hongmin Seo, Misong Ju, Yoon Ho Lee, Taehoon Sung, Yoon-Sik Lee, Ki Tae Nam*, Jang-Yeon Kwon*',
    journal: 'Nature Communications',
    volume: 'Vol. 11, 5896 (2020)',
    year: 2020,
    doi: 'https://www.nature.com/articles/s41467-020-19750-5',
    },
    {
    title: 'Energy scavenging artificial nervous system for detecting rotational movement',
    authors: 'Daehwan Choi, Min-Kyu Song, Taehoon Sung, Sukjin Jang, Jang-Yeon Kwon*',
    journal: 'Nano Energy',
    volume: 'Vol. 74, 104912 (2020)',
    year: 2020,
    doi: 'https://www.sciencedirect.com/science/article/pii/S2211285520304699?casa_token=yuv93sJURB8AAAAA:B8qKIJsCOa8-HHyS-cMnKdkyxIMZcOZthMGm2JsLG3dNMrRbhVqkvuav_YG6jWknvnOBECapoeEN',
    },
    {
    title: 'Tyrosine-rich peptide insulator for rapidly dissolving transient electronics',
    authors: 'Seok Daniel Namgung, Min-Kyu Song, Taehoon Sung, Ouk Hyun Cho, Misong Ju, Hyeohn Kim, Yoon-Sik Lee, Ki Tae Nam, Jang-Yeon Kwon*',
    journal: 'Advanced Materials Technologies',
    volume: 'Vol. 5, 2000516 (2020)',
    year: 2020,
    doi: 'https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/admt.202000516?casa_token=3rzaDJV9Dy0AAAAA%3AfSiXqvXk2ijwUWjalkUSijVHwOH3ilLE8QLhpd2VDCwNRI2AQKasXi7wd6RCPA4oJDrawohvq0y7HAM7',
    },
    {
    title: 'Quantitative analysis of the coupling between proton and electron transport in peptide/manganese oxide hybrid films',
    authors: 'Misong Ju, Ouk Hyun Cho, Jaehun Lee, Seok Daniel Namgung, Min-Kyu Song, Mani Balamurugan, Jang-Yeon Kwon, Ki Tae Nam*',
    journal: 'Physical Chemistry Chemical Physics',
    volume: 'Vol. 22, 7537-7545 (2020)',
    year: 2020,
    doi: 'https://pubs.rsc.org/en/content/articlelanding/2020/cp/c9cp05581a',
    },
    {
    title: 'Two-dimensional WSe2/MoS2 p-n heterojunction-based transparent photovoltaic cell and its performance enhancement by fluoropolymer passivation',
    authors: 'Ah-Jin Cho, Min-Kyu Song, Dong-Won Kang, Jang-Yeon Kwon*',
    journal: 'ACS Applied Materials & Interfaces',
    volume: 'Vol. 10, 35972-35977 (2018)',
    year: 2018,
    doi: 'https://pubs.acs.org/doi/full/10.1021/acsami.8b12250?casa_token=NSpBt13kDsMAAAAA%3AgGWk6EyfxLiISi-IjkhS2zm8UJoo9SCkVpRsO9IAk-N4lnOMPVnssfR59HufwFqQOUa2to1hsMO6RtbF1Q',
    },
    {
    title: 'Physically transient field-effect transistors based on black phosphorus',
    authors: 'Min-Kyu Song, Seok Daniel Namgung, Taehoon Sung, Ah-Jin Cho, Jaehun Lee, Misong Ju, Ki Tae Nam, Yoon-Sik Lee, Jang-Yeon Kwon*',
    journal: 'ACS Applied Materials & Interfaces',
    volume: 'Vol. 10, 42630-42636 (2018)',
    year: 2018,
    doi: 'https://pubs.acs.org/doi/full/10.1021/acsami.8b15015?casa_token=B_ZigKlCVUMAAAAA%3ApWiYD0Rb8MFjX7qw0jyjo0vXbybLQBju6tDGXMjZnIlzpq1-m7YWsWqLvUhSW67yFM878UnrtGJXT7HSRg',
    },
    {
    title: 'Optical properties of the crumpled pattern of selectively layered MoS2',
    authors: 'Hyung-Jun Kim, Young-Woong Song, Seok Daniel Namgung, Min-Kyu Song, Suk Yang, Jang-Yeon Kwon*',
    journal: 'Optics Letters',
    volume: 'Vol. 43, 4590-4593 (2018)',
    year: 2018,
    doi: 'https://opg.optica.org/ol/abstract.cfm?uri=ol-43-19-4590',
    },
    {
    title: 'A transparent solar cell based on a mechanically exfoliated GaTe and InGaZnO p-n heterojunction',
    authors: 'Ah-Jin Cho, Kyung Park, Solah Park, Min-Kyu Song, Kwun-Bum Chung, Jang-Yeon Kwon*',
    journal: 'Journal of Materials Chemistry C',
    volume: 'Vol. 5, 4327-4334 (2017)',
    year: 2017,
    doi: 'https://pubs.rsc.org/en/content/articlehtml/2017/tc/c7tc00275k',
    },
];

const sections = [
  { id: 'highlights', label: '' },
  { id: 'journal', label: 'Journal' },
];

const Publication = () => {
  const [searchParams] = useSearchParams();
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [journalRef, journalInView] = useInView<HTMLDivElement>({ threshold: 0.03 });

  // Full range of years from 2026 to 2017
  const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2018, 2017];

  // Filter publications by selected year
  const filteredPublications = selectedYear === 'all' 
    ? journalPublications 
    : journalPublications.filter(pub => pub.year === selectedYear);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to journal section if anchored
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'journal') {
      setTimeout(() => {
        document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [searchParams]);

  return (
    <Layout>
      {/* Page Header with Hero Background */}
      <PageHeader title="Publication" subtitle="Selected research publications from LIME Lab" />

      {/* Sub-tab bar — Journal only */}
      <section className="sub-tab-bar border-b border-border sticky top-20 z-40">
        <div className="section-container">
          <div className="flex justify-center gap-8 md:gap-12">
            <button
              onClick={() => document.getElementById('journal')?.scrollIntoView({ behavior: 'smooth' })}
              className="sub-tab-button active"
            >
              Publication
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
        <section className="section-padding-tight bg-background animate-fade-in">
          <div className="section-container">
            {/* Section Header */}
            <h2 className="text-3xl font-bold text-black text-center mb-10 animate-fade-in">Research Highlights</h2>
            
            {/* 4-column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlightedPublications.map((pub, index) => (
                <a 
                  key={index}
                  href={pub.doi ? `${pub.doi}` : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border rounded-lg overflow-hidden bg-background group cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image/Placeholder Area */}
                  <div className="relative aspect-[3/4] bg-secondary/50 flex items-center justify-center overflow-hidden">
                    {pub.coverImage ? (
                      <>
                        <img 
                          src={pub.coverImage} 
                          alt={pub.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Cover Badge */}
                        {pub.hasCover && (
                          <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded">
                            Cover
                          </span>
                        )}
                      </>
                    ) : (
                      <FileText className="w-16 h-16 text-muted-foreground/30" />
                    )}
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-4 flex flex-col">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold leading-snug text-foreground group-hover:text-accent transition-colors line-clamp-2">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-accent transition-colors">
                        <span className="font-bold italic">{pub.journal}</span>
                        {pub.volume && `, ${pub.volume}`}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      

      {/* Journal List */}
        <section
        id="journal"
        ref={journalRef}
        className={cn(
          'section-padding-tight bg-background transition-all duration-1000',
          journalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
          <div className="section-container">
            {/* Section Header */}
            <h2 className="text-3xl font-bold text-black text-center mb-10 animate-fade-in">Journal</h2>
            
            {/* Year Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <button
                onClick={() => setSelectedYear('all')}
                className={cn(
                  'px-5 py-2 text-sm font-medium rounded-lg transition-colors',
                  selectedYear === 'all'
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                )}
              >
                All
              </button>
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={cn(
                    'px-5 py-2 text-sm font-medium rounded-lg transition-colors',
                    selectedYear === year
                      ? 'bg-foreground text-background'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                  )}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Publications List */}
            <div className="space-y-0">
              {filteredPublications.map((pub, index) => (
                <a 
                  key={index}
                  href={pub.doi ? `${pub.doi}` : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "publication-item flex flex-col md:flex-row md:items-start gap-4 group cursor-pointer transition-colors",
                    isInitialLoad && "animate-fade-in"
                  )}
                  style={isInitialLoad ? { animationDelay: `${index * 50}ms` } : undefined}
                >
                  <span className="text-sm font-medium text-muted-foreground min-w-[60px]">
                    {pub.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2 group-hover:text-accent transition-colors">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {(() => {
                        // 1. 스타일별로 이름을 분류합니다.
                        const primaryName = 'Min-Kyu Song'; // 밑줄 + 볼드 대상
                        const otherTargetNames = [
                          'Gyeong-Hun Hwang',
                          'Yeong-In Kim' // 새로 추가될 이름들
                        ];

                        // 모든 타겟 이름을 합쳐서 정규식 패턴을 만듭니다.
                        const allTargets = [primaryName, ...otherTargetNames];
                        const pattern = new RegExp(`(${allTargets.join('|')})([\\*†]?)`, 'g');

                        return pub.authors.split(pattern).map((part, i) => {
                          const isPrimary = part === primaryName;
                          const isOtherTarget = otherTargetNames.includes(part);
                          const isSymbol = part === '*' || part === '†';

                          // A. 메인 교수님 성함 (볼드 + 밑줄)
                          if (isPrimary) {
                            return (
                              <span key={i} className="font-bold underline text-foreground">
                                {part}
                              </span>
                            );
                          }

                          // B. 기타 타겟 연구원 (볼드만 적용)
                          if (isOtherTarget) {
                            return (
                              <span key={i} className="font-bold text-foreground">
                                {part}
                              </span>
                            );
                          }

                          // C. 성함 바로 뒤에 붙는 특수기호(*, †) 처리
                          if (isSymbol && i > 0) {
                            const prevPart = pub.authors.split(pattern)[i - 1];
                            if (prevPart === primaryName) {
                              return <span key={i} className="font-bold underline text-foreground">{part}</span>;
                            }
                            if (otherTargetNames.includes(prevPart)) {
                              return <span key={i} className="font-bold text-foreground">{part}</span>;
                            }
                          }

                          return <span key={i}>{part}</span>;
                        });
                      })()}
                    </p>
                    <p className="text-sm group-hover:text-accent transition-colors">
                      <span className="font-bold italic">{pub.journal}</span>
                        {pub.volume && `, ${pub.volume}`}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default Publication;
