import React, { createContext, useContext, useState, useEffect } from 'react';

const CustomizerContext = createContext();

export const COLOR_PRESETS = [
  { 
    id: 'yuktiOfficial', 
    name: '★ Yukti Official Brand', 
    color: '#054f98', 
    accent: '#1bb77d', 
    desc: 'Official Logo Gradient (Royal Navy to Mint Emerald)',
    vars: {
      '--brand-50': '236 253 247', '--brand-100': '209 250 236', '--brand-200': '167 243 218', '--brand-300': '110 231 193',
      '--brand-400': '27 183 125', '--brand-500': '0 167 128', '--brand-600': '5 79 152', '--brand-700': '4 62 120',
      '--brand-800': '3 45 88', '--brand-900': '2 30 60', '--brand-950': '1 15 35',
      '--accent-primary': '27 183 125', '--accent-secondary': '5 79 152'
    }
  },
  { 
    id: 'yuktiEmerald', 
    name: '★ Yukti Vivid Mint', 
    color: '#1bb77d', 
    accent: '#054f98', 
    desc: 'Logo Top Green Gradient & Mint Energy',
    vars: {
      '--brand-50': '236 253 245', '--brand-100': '209 250 229', '--brand-200': '167 243 208', '--brand-300': '110 231 183',
      '--brand-400': '52 211 153', '--brand-500': '27 183 125', '--brand-600': '0 167 128', '--brand-700': '4 120 87',
      '--brand-800': '6 95 70', '--brand-900': '6 78 59', '--brand-950': '2 44 34',
      '--accent-primary': '5 79 152', '--accent-secondary': '2 132 199'
    }
  },
  { 
    id: 'yuktiDeepNavy', 
    name: '★ Yukti Royal Navy', 
    color: '#054f98', 
    accent: '#22c55e', 
    desc: 'Logo Base Typography Deep Sapphire',
    vars: {
      '--brand-50': '239 246 255', '--brand-100': '219 234 254', '--brand-200': '191 219 254', '--brand-300': '147 197 253',
      '--brand-400': '96 165 250', '--brand-500': '5 79 152', '--brand-600': '4 62 120', '--brand-700': '3 45 88',
      '--brand-800': '2 30 60', '--brand-900': '1 20 45', '--brand-950': '1 10 25',
      '--accent-primary': '27 183 125', '--accent-secondary': '6 182 212'
    }
  },
  { 
    id: 'yuktiTealOcean', 
    name: '★ Yukti Coastal Ocean', 
    color: '#008b8b', 
    accent: '#10b981', 
    desc: 'Logo Cyan & Emerald Middle Bridge',
    vars: {
      '--brand-50': '236 254 255', '--brand-100': '207 250 254', '--brand-200': '165 243 252', '--brand-300': '103 232 249',
      '--brand-400': '34 211 238', '--brand-500': '0 139 139', '--brand-600': '0 115 115', '--brand-700': '5 79 152',
      '--brand-800': '4 62 120', '--brand-900': '2 40 70', '--brand-950': '1 20 40',
      '--accent-primary': '27 183 125', '--accent-secondary': '5 79 152'
    }
  },
  { 
    id: 'indigo', 
    name: 'Cyber Indigo', 
    color: '#4f46e5', 
    accent: '#06b6d4', 
    desc: 'Stripe & Linear Classic',
    vars: {
      '--brand-50': '238 242 255', '--brand-100': '224 231 255', '--brand-200': '199 210 254', '--brand-300': '165 180 252',
      '--brand-400': '129 140 248', '--brand-500': '99 102 241', '--brand-600': '79 70 229', '--brand-700': '67 56 202',
      '--brand-800': '55 48 163', '--brand-900': '49 46 129', '--brand-950': '30 27 75',
      '--accent-primary': '6 182 212', '--accent-secondary': '139 92 246'
    }
  },
  { 
    id: 'emerald', 
    name: 'Emerald Supabase', 
    color: '#059669', 
    accent: '#10b981', 
    desc: 'High Growth & AI Tech',
    vars: {
      '--brand-50': '236 253 245', '--brand-100': '209 250 229', '--brand-200': '167 243 208', '--brand-300': '110 231 183',
      '--brand-400': '52 211 153', '--brand-500': '16 185 129', '--brand-600': '5 150 105', '--brand-700': '4 120 87',
      '--brand-800': '6 95 70', '--brand-900': '6 78 59', '--brand-950': '2 44 34',
      '--accent-primary': '20 184 166', '--accent-secondary': '59 130 246'
    }
  },
  { 
    id: 'cyan', 
    name: 'Oceanic Cyan', 
    color: '#0891b2', 
    accent: '#3b82f6', 
    desc: 'Next-Gen Cloud Vibe',
    vars: {
      '--brand-50': '236 254 255', '--brand-100': '207 250 254', '--brand-200': '165 243 252', '--brand-300': '103 232 249',
      '--brand-400': '34 211 238', '--brand-500': '6 182 212', '--brand-600': '8 145 178', '--brand-700': '14 116 144',
      '--brand-800': '21 94 117', '--brand-900': '22 78 99', '--brand-950': '8 51 68',
      '--accent-primary': '59 130 246', '--accent-secondary': '99 102 241'
    }
  },
  { 
    id: 'violet', 
    name: 'Royal Violet', 
    color: '#9333ea', 
    accent: '#ec4899', 
    desc: 'Futuristic Luxury SaaS',
    vars: {
      '--brand-50': '250 245 255', '--brand-100': '243 232 255', '--brand-200': '233 213 255', '--brand-300': '216 180 254',
      '--brand-400': '192 132 252', '--brand-500': '168 85 247', '--brand-600': '147 51 234', '--brand-700': '126 34 206',
      '--brand-800': '107 33 168', '--brand-900': '88 28 135', '--brand-950': '59 7 100',
      '--accent-primary': '236 72 153', '--accent-secondary': '244 63 94'
    }
  },
  { 
    id: 'crimson', 
    name: 'Midnight Crimson', 
    color: '#e11d48', 
    accent: '#f97316', 
    desc: 'Dynamic High Impact',
    vars: {
      '--brand-50': '255 241 242', '--brand-100': '255 228 230', '--brand-200': '254 205 211', '--brand-300': '253 164 175',
      '--brand-400': '251 113 133', '--brand-500': '244 63 94', '--brand-600': '225 29 72', '--brand-700': '190 18 60',
      '--brand-800': '159 18 57', '--brand-900': '136 19 55', '--brand-950': '76 5 25',
      '--accent-primary': '249 115 22', '--accent-secondary': '234 179 8'
    }
  },
  { 
    id: 'amber', 
    name: 'Sunset Gold', 
    color: '#d97706', 
    accent: '#ea580c', 
    desc: 'Warm Prestige & WealthTech',
    vars: {
      '--brand-50': '255 251 235', '--brand-100': '254 243 199', '--brand-200': '253 230 138', '--brand-300': '252 211 77',
      '--brand-400': '251 191 36', '--brand-500': '245 158 11', '--brand-600': '217 119 6', '--brand-700': '180 83 9',
      '--brand-800': '146 64 14', '--brand-900': '120 53 15', '--brand-950': '69 26 3',
      '--accent-primary': '234 88 12', '--accent-secondary': '225 29 72'
    }
  },
  { 
    id: 'neonLime', 
    name: 'Cyberpunk Lime', 
    color: '#65a30d', 
    accent: '#06b6d4', 
    desc: 'High Voltage Modernist',
    vars: {
      '--brand-50': '247 254 231', '--brand-100': '236 252 203', '--brand-200': '217 249 157', '--brand-300': '190 242 100',
      '--brand-400': '163 230 53', '--brand-500': '132 204 22', '--brand-600': '101 163 13', '--brand-700': '77 124 15',
      '--brand-800': '63 98 18', '--brand-900': '54 83 20', '--brand-950': '26 46 5',
      '--accent-primary': '6 182 212', '--accent-secondary': '16 185 129'
    }
  },
  { 
    id: 'nordic', 
    name: 'Nordic Frost', 
    color: '#475569', 
    accent: '#0284c7', 
    desc: 'Minimalist Slate & Steel',
    vars: {
      '--brand-50': '248 250 252', '--brand-100': '241 245 249', '--brand-200': '226 232 240', '--brand-300': '203 213 225',
      '--brand-400': '148 163 184', '--brand-500': '100 116 139', '--brand-600': '71 85 105', '--brand-700': '51 65 85',
      '--brand-800': '30 41 59', '--brand-900': '15 23 42', '--brand-950': '2 6 23',
      '--accent-primary': '2 132 199', '--accent-secondary': '14 165 233'
    }
  },
  { 
    id: 'roseGold', 
    name: 'Luxury Rose Gold', 
    color: '#be185d', 
    accent: '#f59e0b', 
    desc: 'Elegance & Premium Tier',
    vars: {
      '--brand-50': '253 242 248', '--brand-100': '252 231 243', '--brand-200': '249 168 212', '--brand-300': '244 114 182',
      '--brand-400': '236 72 153', '--brand-500': '219 39 119', '--brand-600': '190 24 93', '--brand-700': '157 23 77',
      '--brand-800': '131 24 67', '--brand-900': '112 26 63', '--brand-950': '80 7 40',
      '--accent-primary': '245 158 11', '--accent-secondary': '249 115 22'
    }
  },
  { 
    id: 'fuchsia', 
    name: 'Retro Synthwave', 
    color: '#c026d3', 
    accent: '#06b6d4', 
    desc: 'Cyber Synth Aesthetics',
    vars: {
      '--brand-50': '253 244 255', '--brand-100': '250 232 255', '--brand-200': '245 208 254', '--brand-300': '240 171 252',
      '--brand-400': '232 121 249', '--brand-500': '217 70 239', '--brand-600': '192 38 211', '--brand-700': '162 28 175',
      '--brand-800': '134 25 143', '--brand-900': '112 26 117', '--brand-950': '74 4 78',
      '--accent-primary': '6 182 212', '--accent-secondary': '244 63 94'
    }
  },
  { 
    id: 'teal', 
    name: 'Deep Oceanic Teal', 
    color: '#0d9488', 
    accent: '#06b6d4', 
    desc: 'HealthTech & BioTech',
    vars: {
      '--brand-50': '240 253 250', '--brand-100': '204 251 241', '--brand-200': '153 246 228', '--brand-300': '94 234 212',
      '--brand-400': '45 212 191', '--brand-500': '20 184 166', '--brand-600': '13 148 136', '--brand-700': '15 118 110',
      '--brand-800': '17 94 89', '--brand-900': '19 78 74', '--brand-950': '4 47 46',
      '--accent-primary': '6 182 212', '--accent-secondary': '59 130 246'
    }
  },
  { 
    id: 'sky', 
    name: 'Electric Sky Blue', 
    color: '#0284c7', 
    accent: '#6366f1', 
    desc: 'Telegram & Fast Cloud',
    vars: {
      '--brand-50': '240 249 255', '--brand-100': '224 242 254', '--brand-200': '186 230 253', '--brand-300': '125 211 252',
      '--brand-400': '56 189 248', '--brand-500': '14 165 233', '--brand-600': '2 132 199', '--brand-700': '3 105 161',
      '--brand-800': '7 89 133', '--brand-900': '12 74 110', '--brand-950': '8 47 73',
      '--accent-primary': '99 102 241', '--accent-secondary': '168 85 247'
    }
  },
  { 
    id: 'orange', 
    name: 'Blaze Orange', 
    color: '#ea580c', 
    accent: '#f59e0b', 
    desc: 'Cloudflare & GitLab',
    vars: {
      '--brand-50': '255 247 237', '--brand-100': '255 237 213', '--brand-200': '254 215 170', '--brand-300': '253 186 116',
      '--brand-400': '251 146 60', '--brand-500': '249 115 22', '--brand-600': '234 88 12', '--brand-700': '194 65 12',
      '--brand-800': '154 52 18', '--brand-900': '124 45 18', '--brand-950': '67 20 7',
      '--accent-primary': '245 158 11', '--accent-secondary': '225 29 72'
    }
  },
  { 
    id: 'purple', 
    name: 'Obsidian Purple', 
    color: '#7c3aed', 
    accent: '#06b6d4', 
    desc: 'Discord & Web3 Polygon',
    vars: {
      '--brand-50': '245 243 255', '--brand-100': '237 233 254', '--brand-200': '221 214 254', '--brand-300': '196 181 253',
      '--brand-400': '167 139 250', '--brand-500': '139 92 246', '--brand-600': '124 58 237', '--brand-700': '109 40 217',
      '--brand-800': '91 33 182', '--brand-900': '76 29 149', '--brand-950': '46 16 101',
      '--accent-primary': '6 182 212', '--accent-secondary': '236 72 153'
    }
  },
  { 
    id: 'darkSlate', 
    name: 'GitHub Dark Slate', 
    color: '#334155', 
    accent: '#38bdf8', 
    desc: 'Ultra Monochrome Pro',
    vars: {
      '--brand-50': '248 250 252', '--brand-100': '241 245 249', '--brand-200': '226 232 240', '--brand-300': '203 213 225',
      '--brand-400': '148 163 184', '--brand-500': '100 116 139', '--brand-600': '51 65 85', '--brand-700': '30 41 59',
      '--brand-800': '15 23 42', '--brand-900': '10 15 30', '--brand-950': '2 6 23',
      '--accent-primary': '56 189 248', '--accent-secondary': '129 140 248'
    }
  },
  { 
    id: 'mint', 
    name: 'Neo Mint & Pine', 
    color: '#10b981', 
    accent: '#06b6d4', 
    desc: 'Clean Climate & Fintech',
    vars: {
      '--brand-50': '236 253 245', '--brand-100': '209 250 229', '--brand-200': '167 243 208', '--brand-300': '110 231 183',
      '--brand-400': '52 211 153', '--brand-500': '16 185 129', '--brand-600': '5 150 105', '--brand-700': '4 120 87',
      '--brand-800': '6 95 70', '--brand-900': '6 78 59', '--brand-950': '2 44 34',
      '--accent-primary': '6 182 212', '--accent-secondary': '245 158 11'
    }
  },
  { 
    id: 'sapphire', 
    name: 'Royal Sapphire', 
    color: '#2563eb', 
    accent: '#06b6d4', 
    desc: 'IBM & Enterprise Cloud',
    vars: {
      '--brand-50': '239 246 255', '--brand-100': '219 234 254', '--brand-200': '191 219 254', '--brand-300': '147 197 253',
      '--brand-400': '96 165 250', '--brand-500': '59 130 246', '--brand-600': '37 99 235', '--brand-700': '29 78 216',
      '--brand-800': '30 64 175', '--brand-900': '30 58 138', '--brand-950': '23 37 84',
      '--accent-primary': '6 182 212', '--accent-secondary': '16 185 129'
    }
  },
  { 
    id: 'copper', 
    name: 'Terracotta Copper', 
    color: '#c2410c', 
    accent: '#f59e0b', 
    desc: 'Industrial & Hardware',
    vars: {
      '--brand-50': '255 247 237', '--brand-100': '255 237 213', '--brand-200': '254 215 170', '--brand-300': '253 186 116',
      '--brand-400': '251 146 60', '--brand-500': '234 88 12', '--brand-600': '194 65 12', '--brand-700': '154 52 18',
      '--brand-800': '124 45 18', '--brand-900': '67 20 7', '--brand-950': '45 10 3',
      '--accent-primary': '245 158 11', '--accent-secondary': '225 29 72'
    }
  },
  { 
    id: 'electricPink', 
    name: 'Cyber Neon Pink', 
    color: '#db2777', 
    accent: '#8b5cf6', 
    desc: 'Gen-Z & Creative Studios',
    vars: {
      '--brand-50': '253 242 248', '--brand-100': '252 231 243', '--brand-200': '249 168 212', '--brand-300': '244 114 182',
      '--brand-400': '236 72 153', '--brand-500': '219 39 119', '--brand-600': '190 24 93', '--brand-700': '157 23 77',
      '--brand-800': '131 24 67', '--brand-900': '112 26 63', '--brand-950': '80 7 40',
      '--accent-primary': '139 92 246', '--accent-secondary': '6 182 212'
    }
  },
  { 
    id: 'forest', 
    name: 'Alpine Forest', 
    color: '#15803d', 
    accent: '#84cc16', 
    desc: 'Deep Natural Elegance',
    vars: {
      '--brand-50': '240 253 244', '--brand-100': '220 252 231', '--brand-200': '187 247 208', '--brand-300': '134 239 172',
      '--brand-400': '74 222 128', '--brand-500': '34 197 94', '--brand-600': '21 128 61', '--brand-700': '22 101 52',
      '--brand-800': '20 83 45', '--brand-900': '14 63 35', '--brand-950': '5 46 22',
      '--accent-primary': '132 204 22', '--accent-secondary': '6 182 212'
    }
  },
  { 
    id: 'aurora', 
    name: 'Northern Aurora', 
    color: '#06b6d4', 
    accent: '#10b981', 
    desc: 'Luminous Arctic Sky',
    vars: {
      '--brand-50': '236 254 255', '--brand-100': '207 250 254', '--brand-200': '165 243 252', '--brand-300': '103 232 249',
      '--brand-400': '34 211 238', '--brand-500': '6 182 212', '--brand-600': '8 145 178', '--brand-700': '14 116 144',
      '--brand-800': '21 94 117', '--brand-900': '22 78 99', '--brand-950': '8 51 68',
      '--accent-primary': '16 185 129', '--accent-secondary': '139 92 246'
    }
  },
  { 
    id: 'carbon', 
    name: 'Carbon Gold', 
    color: '#52525b', 
    accent: '#f59e0b', 
    desc: 'Prestige Automotive & Aero',
    vars: {
      '--brand-50': '250 250 250', '--brand-100': '244 244 245', '--brand-200': '228 228 231', '--brand-300': '212 212 216',
      '--brand-400': '161 161 170', '--brand-500': '113 113 122', '--brand-600': '82 82 91', '--brand-700': '63 63 70',
      '--brand-800': '39 39 42', '--brand-900': '24 24 27', '--brand-950': '9 9 11',
      '--accent-primary': '245 158 11', '--accent-secondary': '234 88 12'
    }
  },
  { 
    id: 'hyperBlue', 
    name: 'Hyperdrive Cobalt', 
    color: '#1d4ed8', 
    accent: '#38bdf8', 
    desc: 'Google Cloud & Deep AI',
    vars: {
      '--brand-50': '239 246 255', '--brand-100': '219 234 254', '--brand-200': '191 219 254', '--brand-300': '147 197 253',
      '--brand-400': '96 165 250', '--brand-500': '59 130 246', '--brand-600': '29 78 216', '--brand-700': '30 64 175',
      '--brand-800': '30 58 138', '--brand-900': '23 37 84', '--brand-950': '15 23 42',
      '--accent-primary': '56 189 248', '--accent-secondary': '16 185 129'
    }
  },
  { 
    id: 'ruby', 
    name: 'Imperial Ruby', 
    color: '#b91c1c', 
    accent: '#f43f5e', 
    desc: 'Quantum High Frequency',
    vars: {
      '--brand-50': '254 242 242', '--brand-100': '254 226 226', '--brand-200': '254 202 202', '--brand-300': '252 165 165',
      '--brand-400': '248 113 113', '--brand-500': '239 68 68', '--brand-600': '185 28 28', '--brand-700': '153 27 27',
      '--brand-800': '127 29 29', '--brand-900': '69 10 10', '--brand-950': '45 5 5',
      '--accent-primary': '244 63 94', '--accent-secondary': '245 158 11'
    }
  }
];

export const NAVBAR_VARIANTS = [
  { id: 'v1_rextonEnterprise', name: 'V1: Rexton Enterprise TopBar & Mega Menu', desc: 'Enterprise contact bar, Google 4.9 rating, WhatsApp and mega menus' },
  { id: 'v2_modernFloating', name: 'V2: Modern Floating Island Pill', desc: 'Modern floating pill header with glassmorphism and active indicators' },
  { id: 'v3_centeredBrand', name: 'V3: Symmetrical Editorial Split', desc: 'Clean balanced split layout with bold center logo and actions' },
  { id: 'v4_commandDock', name: 'V4: Cyber Command Dock & Telemetry', desc: 'Dark glass command cockpit with live uptime and tech pills' },
  { id: 'v5_gradientBanner', name: 'V5: Brand Gradient Header & Fast Bar', desc: 'Vivid brand gradient header with live admission ticker' },
];

export const DROPDOWN_VARIANTS = [
  { id: 'v1_megaSplit', name: 'V1: Stripe 2-Col Mega Menu + Spotlight Banner', desc: 'Expansive 2-column menu with student placement spotlight card & 1-click syllabus' },
  { id: 'v2_bentoCards', name: 'V2: Supabase Bento Cards + Tech Stack Badges', desc: 'Visual 3-card grid with duration, salary tags, and stack badges' },
  { id: 'v3_linearLuxury', name: 'V3: Linear Luxury Minimal List + Salary Tiers', desc: 'Ultra-clean list with 12 modules pill, salary growth, and hot indicators' },
  { id: 'v4_cyberTerminal', name: 'V4: Cyber Terminal + CLI Command Enroller', desc: 'Futuristic command console with bash shortcuts and live lab seats' },
  { id: 'v5_pathwayTabs', name: 'V5: Pathway Roadmap Explorer + Level Switcher', desc: 'Tabbed career navigator: Beginner -> Full Stack -> FAANG prep' },
];

export const FOOTER_VARIANTS = [
  { id: 'v1_rextonEnterprise', name: 'V1: 4-Column Enterprise Portal (Rexton Standard)', desc: 'Comprehensive columns with Google rating, courses, and direct help' },
  { id: 'v2_modernBento', name: 'V2: Asymmetric Bento Grid & Live Telemetry', desc: 'Modular bento cards with newsletter, live server status & location' },
  { id: 'v3_splitActionMega', name: 'V3: High-Impact Action Banner & Mega Catalog', desc: 'Bold CTA gradient banner with dual triggers and full link index' },
  { id: 'v4_cyberTerminal', name: 'V4: Developer Terminal Hub & Stack Badges', desc: 'Dark terminal look with tech stack pills, uptime & live coordinates' },
  { id: 'v5_minimalCentered', name: 'V5: Apple Minimalist & Corporate Certifications', desc: 'Clean centered typography with ISO 9001:2015 badges and quote pill' },
];

export const HERO_VARIANTS = [
  { id: 'v1_neosaas', name: 'V1: Neo-SaaS Live Console', desc: 'Split layout with interactive terminal & benchmark simulators' },
  { id: 'v2_enterprise', name: 'V2: Centered Enterprise', desc: 'Bold centered hero with glowing mesh & 4 float metric pods' },
  { id: 'v3_splitRoi', name: 'V3: Live ROI Spotlight', desc: 'Interactive project ROI calculator with team slider' },
  { id: 'v4_bentoGrid', name: 'V4: Futuristic Bento Grid', desc: 'Modular grid showcase with interactive tech cards' },
  { id: 'v5_cyberDeck', name: 'V5: Cyber Hologram Deck', desc: 'Ultra-tech futuristic command center telemetry aesthetic' },
  { id: 'v6_linearMinimal', name: 'V6: Linear Minimalist Command', desc: 'Linear-inspired dark canvas with keyboard shortcuts & command bar' },
  { id: 'v7_stripeIsometric', name: 'V7: Stripe Gradient Isometric', desc: 'Stripe-inspired glowing waves with floating architecture badges' },
  { id: 'v8_figmaCanvas', name: 'V8: Collaborative Canvas', desc: 'Simulated multi-cursor engineering & active mentor tags' },
  { id: 'v9_splitAppPreview', name: 'V9: Dual Device Mockup', desc: 'Interactive live Web vs iOS app simulator preview' },
  { id: 'v10_editorialLuxury', name: 'V10: Apple Editorial Luxury', desc: 'Ultra-clean spacious typography with big metrics & video trigger' },
  { id: 'v_docx_itransition', name: 'Docx Ref: Itransition Enterprise Hero', desc: 'Exact layout reference from docx (Itransition style with custom tech badges)' },
];

export const SERVICES_VARIANTS = [
  { id: 'v1_tabs', name: 'V1: Interactive Deep Tabs', desc: 'Sidebar selection with deep deliverable breakdown' },
  { id: 'v2_3dGrid', name: 'V2: 3D Glassmorphism Grid', desc: 'Visual 5-card responsive glass cards with hover lift' },
  { id: 'v3_accordion', name: 'V3: Architecture Accordion', desc: 'Expandable technical deep-dive and SLA points' },
  { id: 'v4_carousel', name: 'V4: Horizontal Slider', desc: 'Swipeable capability deck with fast quotes' },
  { id: 'v5_matrix', name: 'V5: Capability Matrix', desc: 'Enterprise feature comparison & speed benchmark table' },
  { id: 'v6_bentoMosaic', name: 'V6: Asymmetric Bento Mosaic', desc: 'Apple-style irregular bento grid with hero spotlight' },
  { id: 'v7_tabbedCode', name: 'V7: Developer Code API View', desc: 'Interactive backend API endpoints and schema preview' },
  { id: 'v8_hoverGlow', name: 'V8: Border-Glow Tech Cards', desc: 'Cyber illuminated neon borders with numbered badges' },
  { id: 'v9_lifecycleTimeline', name: 'V9: Engineering Lifecycle', desc: 'Stepwise service execution journey with deliverables' },
  { id: 'v10_tierComparison', name: 'V10: Enterprise Scope Tiers', desc: 'Startup vs Mid-Market vs Enterprise scale capability packages' },
  { id: 'v_docx_itransition', name: 'Docx Ref: Itransition 5-Pillar Grid', desc: 'Exact 5-service capability structure from docx reference' },
];

export const TRAINING_VARIANTS = [
  { id: 'v1_bento', name: 'V1: Bento Course Grid', desc: 'Salary badges, 6 student assurances & course tracks' },
  { id: 'v2_pathway', name: 'V2: Career Pathway Stepper', desc: 'Step-by-step student roadmap from novice to 16 LPA' },
  { id: 'v3_salaryCompare', name: 'V3: Package Comparison Deck', desc: 'Interactive salary growth and hiring partner metrics' },
  { id: 'v4_curriculumTabs', name: 'V4: Deep Curriculum Explorer', desc: 'Interactive week-by-week syllabus modules' },
  { id: 'v5_mentorshipSpotlight', name: 'V5: 1-on-1 Mentorship Pods', desc: 'Direct faculty connect and placement guarantee showcase' },
  { id: 'v6_skillRadar', name: 'V6: Tech Skill Radar Matrix', desc: 'Interactive skills inventory & hiring readiness tracker' },
  { id: 'v7_courseCatalog', name: 'V7: Course Catalog Showcase', desc: 'Filterable course cards with syllabus download modal' },
  { id: 'v8_liveBatches', name: 'V8: Upcoming Batches & Deadlines', desc: 'Live countdown timers for scholarship batches' },
  { id: 'v9_studentJourney', name: 'V9: Day in Life of Student', desc: 'Interactive visual routine: lab -> code review -> placement' },
  { id: 'v10_tuitionRoi', name: 'V10: Tuition vs 1st Year ROI', desc: 'Interactive career investment vs salary return simulator' },
  { id: 'v_docx_itransition', name: 'Docx Ref: Itransition 6-Core Assurances', desc: 'Exact 6-point student value proposition from docx' },
];

export const ROADMAP_VARIANTS = [
  { id: 'v1_timeline', name: 'V1: 7-Step Progress Timeline', desc: 'Interactive step-by-step horizontal progress bar' },
  { id: 'v2_matrix', name: 'V2: Stage Matrix Cards', desc: 'Interactive cards with milestone checkmark badges' },
  { id: 'v3_circular', name: 'V3: Circular Process Wheel', desc: 'Interactive cycle navigator with central deliverable' },
  { id: 'v4_kanban', name: 'V4: Agile Sprint Board', desc: 'Discovery -> Design -> Dev -> QA -> Go-Live sprint columns' },
  { id: 'v5_verticalDossier', name: 'V5: Vertical Milestone Dossier', desc: 'Architectural timeline with expandable stage dossiers' },
  { id: 'v6_ganttChart', name: 'V6: Interactive Sprint Gantt', desc: 'Visual week-by-week sprint timeline with deliverables' },
  { id: 'v7_splitPhases', name: 'V7: 3-Phase Macro Pipeline', desc: 'Phase 1 Strategy -> Phase 2 Engineering -> Phase 3 Scale' },
  { id: 'v8_accordionSteps', name: 'V8: Expandable Milestone List', desc: 'Step-by-step checklist with SLA commitments' },
  { id: 'v9_cardDeck', name: 'V9: Swipeable Milestone Deck', desc: 'Interactive card deck with progress percentages' },
  { id: 'v10_nodeFlowchart', name: 'V10: Connected Node Flowchart', desc: 'Visual flowchart graph with interactive node inspection' },
  { id: 'v_docx_011bq', name: 'Docx Ref: 011BQ 7-Stage Process', desc: 'Exact 7-stage software development lifecycle from docx' },
];

export const TEAM_VARIANTS = [
  { id: 'v1_glassCards', name: 'V1: Modern Glass Badges', desc: 'Verified leadership avatars with specialty tags' },
  { id: 'v2_bentoLeadership', name: 'V2: Executive Bento Spotlight', desc: 'Founder & CTO spotlight with company vision' },
  { id: 'v3_flipCards', name: 'V3: Interactive 3D Flip Cards', desc: 'Hover to flip and see enterprise milestones' },
  { id: 'v4_compactList', name: 'V4: Corporate List View', desc: 'Sleek corporate list with instant direct connect' },
  { id: 'v5_carouselDeck', name: 'V5: Leadership Carousel Deck', desc: 'Swipeable executive deck with bio dialogs' },
  { id: 'v6_editorialPortraits', name: 'V6: Editorial Portrait Cards', desc: 'Apple-style clean portraits with leadership philosophies' },
  { id: 'v7_domainLead', name: 'V7: Engineering Domain Leads', desc: 'Organized by architecture domain (AI, Cloud, Big Data, Full Stack)' },
  { id: 'v8_techBadges', name: 'V8: Verified Tech Stack Cards', desc: 'Focus on verified certifications and GitHub stats' },
  { id: 'v9_socialDirect', name: 'V9: Direct Connect Social Pods', desc: 'Quick LinkedIn & Email touchpoints with response SLA' },
  { id: 'v10_quoteCards', name: 'V10: Executive Principle Quotes', desc: 'Direct quotes from CEO & CTOs on software delivery standards' },
  { id: 'v_docx_itransition', name: 'Docx Ref: Itransition Leadership Dossier', desc: 'Exact leadership directory matching docx reference' },
];

export const TESTIMONIALS_VARIANTS = [
  { id: 'v1_dualFilter', name: 'V1: Filterable Card Grid', desc: 'Enterprise client vs placed student review filter' },
  { id: 'v2_spotlightQuote', name: 'V2: Executive Quote Spotlight', desc: 'Large editorial statement with partner logos' },
  { id: 'v3_statsWall', name: 'V3: Placement Metric Wall', desc: '94% rate, salary tiers & real student reviews' },
  { id: 'v4_masonry', name: 'V4: Multi-Column Masonry', desc: 'Staggered testimonial cards with verified star ratings' },
  { id: 'v5_interactiveFeed', name: 'V5: Live Video/Audio Sim Feed', desc: 'Interactive review feed with verification badges' },
  { id: 'v6_partnerLogos', name: 'V6: Corporate Partner Marquee', desc: '45+ hiring brands with placement package ticker' },
  { id: 'v7_fullCarousel', name: 'V7: Full-Width Review Carousel', desc: 'Large quote carousel with client avatar badges' },
  { id: 'v8_miniCaseStudies', name: 'V8: Client Case Study Mini-Cards', desc: 'Problem -> Solution -> Verified Business Result' },
  { id: 'v9_alumniTicker', name: 'V9: Recent Placements Feed', desc: 'Live feed of students placed at TCS, Infosys, Wipro, Fintech' },
  { id: 'v10_roiMetricsProof', name: 'V10: Quantifiable ROI Stats Grid', desc: '40% cost reduction, 99.9% uptime, 16 LPA top package' },
  { id: 'v_docx_record', name: 'Docx Ref: Placement & Client Record', desc: 'Verified placement track record from docx reference' },
];

export const CONTACT_VARIANTS = [
  { id: 'v1_dualMode', name: 'V1: Enterprise & Student Form', desc: 'Dual-mode form with subject switcher' },
  { id: 'v2_splitCalendar', name: 'V2: Calendar Scheduler Sim', desc: 'Pick date & time slot for priority call' },
  { id: 'v3_wizard', name: 'V3: 3-Step Project Wizard', desc: 'Interactive scope, budget & timeline questionnaire' },
  { id: 'v4_instantChat', name: 'V4: Live Quotation Bot Sim', desc: 'Interactive chat interface for fast estimates' },
  { id: 'v5_executiveContact', name: 'V5: Executive Direct Connect', desc: 'Minimalist direct email/call deck with SLA promise' },
  { id: 'v6_callback60s', name: 'V6: 60-Second Priority Callback', desc: 'Ultra-fast 2-field emergency consultation trigger' },
  { id: 'v7_scopeConfigurator', name: 'V7: Scope & Budget Configurator', desc: 'Interactive checkboxes with live budget estimate' },
  { id: 'v8_hubLocations', name: 'V8: Global Tech Hub & Map Deck', desc: 'Headquarters info, support hours, and visit booking' },
  { id: 'v9_faqSplit', name: 'V9: FAQ Accordion + Quick Form', desc: 'Common questions answered with side contact form' },
  { id: 'v10_rfpUpload', name: 'V10: Enterprise RFP Submission', desc: 'Formal proposal and document submission simulator' },
  { id: 'v_docx_consultation', name: 'Docx Ref: Expert Consultation Deck', desc: 'Exact consultation layout from docx specification' },
];

export function CustomizerProvider({ children }) {
  const [colorPreset, setColorPreset] = useState(() => localStorage.getItem('yukti-color-preset') || 'yuktiOfficial');
  const [navbarVariant, setNavbarVariant] = useState(() => localStorage.getItem('yukti-navbar-variant') || 'v1_rextonEnterprise');
  const [dropdownVariant, setDropdownVariant] = useState(() => localStorage.getItem('yukti-dropdown-variant') || 'v1_megaSplit');
  const [heroVariant, setHeroVariant] = useState(() => localStorage.getItem('yukti-hero-variant') || 'v1_neosaas');
  const [servicesVariant, setServicesVariant] = useState(() => localStorage.getItem('yukti-services-variant') || 'v1_tabs');
  const [trainingVariant, setTrainingVariant] = useState(() => localStorage.getItem('yukti-training-variant') || 'v1_bento');
  const [roadmapVariant, setRoadmapVariant] = useState(() => localStorage.getItem('yukti-roadmap-variant') || 'v1_timeline');
  const [teamVariant, setTeamVariant] = useState(() => localStorage.getItem('yukti-team-variant') || 'v1_glassCards');
  const [testimonialsVariant, setTestimonialsVariant] = useState(() => localStorage.getItem('yukti-testimonials-variant') || 'v1_dualFilter');
  const [contactVariant, setContactVariant] = useState(() => localStorage.getItem('yukti-contact-variant') || 'v1_dualMode');
  const [footerVariant, setFooterVariant] = useState(() => localStorage.getItem('yukti-footer-variant') || 'v1_rextonEnterprise');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Apply color preset variables directly to style object for 100% instant reactivity
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme-preset', colorPreset);
    document.body.setAttribute('data-theme-preset', colorPreset);

    const presetObj = COLOR_PRESETS.find(p => p.id === colorPreset) || COLOR_PRESETS[0];
    if (presetObj && presetObj.vars) {
      Object.entries(presetObj.vars).forEach(([key, val]) => {
        root.style.setProperty(key, val);
      });
    }

    localStorage.setItem('yukti-color-preset', colorPreset);
  }, [colorPreset]);

  useEffect(() => { localStorage.setItem('yukti-navbar-variant', navbarVariant); }, [navbarVariant]);
  useEffect(() => { localStorage.setItem('yukti-dropdown-variant', dropdownVariant); }, [dropdownVariant]);
  useEffect(() => { localStorage.setItem('yukti-hero-variant', heroVariant); }, [heroVariant]);
  useEffect(() => { localStorage.setItem('yukti-services-variant', servicesVariant); }, [servicesVariant]);
  useEffect(() => { localStorage.setItem('yukti-training-variant', trainingVariant); }, [trainingVariant]);
  useEffect(() => { localStorage.setItem('yukti-roadmap-variant', roadmapVariant); }, [roadmapVariant]);
  useEffect(() => { localStorage.setItem('yukti-team-variant', teamVariant); }, [teamVariant]);
  useEffect(() => { localStorage.setItem('yukti-testimonials-variant', testimonialsVariant); }, [testimonialsVariant]);
  useEffect(() => { localStorage.setItem('yukti-contact-variant', contactVariant); }, [contactVariant]);
  useEffect(() => { localStorage.setItem('yukti-footer-variant', footerVariant); }, [footerVariant]);

  const randomizeAllVariants = () => {
    const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)].id;
    setNavbarVariant(randomItem(NAVBAR_VARIANTS));
    setDropdownVariant(randomItem(DROPDOWN_VARIANTS));
    setHeroVariant(randomItem(HERO_VARIANTS));
    setServicesVariant(randomItem(SERVICES_VARIANTS));
    setTrainingVariant(randomItem(TRAINING_VARIANTS));
    setRoadmapVariant(randomItem(ROADMAP_VARIANTS));
    setTeamVariant(randomItem(TEAM_VARIANTS));
    setTestimonialsVariant(randomItem(TESTIMONIALS_VARIANTS));
    setContactVariant(randomItem(CONTACT_VARIANTS));
    setFooterVariant(randomItem(FOOTER_VARIANTS));
    setColorPreset(randomItem(COLOR_PRESETS));
  };

  return (
    <CustomizerContext.Provider
      value={{
        colorPreset,
        setColorPreset,
        navbarVariant,
        setNavbarVariant,
        dropdownVariant,
        setDropdownVariant,
        heroVariant,
        setHeroVariant,
        servicesVariant,
        setServicesVariant,
        trainingVariant,
        setTrainingVariant,
        roadmapVariant,
        setRoadmapVariant,
        teamVariant,
        setTeamVariant,
        testimonialsVariant,
        setTestimonialsVariant,
        contactVariant,
        setContactVariant,
        footerVariant,
        setFooterVariant,
        isCustomizerOpen,
        setIsCustomizerOpen,
        randomizeAllVariants,
        COLOR_PRESETS,
        NAVBAR_VARIANTS,
        DROPDOWN_VARIANTS,
        HERO_VARIANTS,
        SERVICES_VARIANTS,
        TRAINING_VARIANTS,
        ROADMAP_VARIANTS,
        TEAM_VARIANTS,
        TESTIMONIALS_VARIANTS,
        CONTACT_VARIANTS,
        FOOTER_VARIANTS
      }}
    >
      {children}
    </CustomizerContext.Provider>
  );
}

export function useCustomizer() {
  const context = useContext(CustomizerContext);
  if (!context) {
    throw new Error('useCustomizer must be used within a CustomizerProvider');
  }
  return context;
}
