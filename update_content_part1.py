import json

# Read the original content.json
with open('data/content.json', 'r', encoding='utf-8') as f:
    content = json.load(f)

# Update globals with real CV data
content['globals']['siteName'] = {
    "fr": "Omar Naifar",
    "en": "Omar Naifar"
}

content['globals']['jobTitle'] = {
    "fr": "Ingénieur Full-Stack",
    "en": "Full-Stack Engineer"
}

content['globals']['location'] = {
    "fr": "Sfax, Tunisie",
    "en": "Sfax, Tunisia"
}

content['globals']['email'] = "omarneyfar@gmail.com"
content['globals']['phone'] = "+216 44 78 50 90"

content['globals']['about'] = {
    "fr": "Ingénieur Full-Stack dynamique avec une solide expérience dans la création et le déploiement d'applications web évolutives et de plateformes SaaS. Compétent en frameworks JavaScript modernes, pipelines CI/CD et infrastructure cloud. Également expérimenté en développement mobile et APIs IA.",
    "en": "Dynamic Full-Stack Engineer with strong experience in building and deploying scalable web applications and SaaS platforms. Skilled in modern JavaScript frameworks, CI/CD pipelines, and cloud infrastructure. Also experienced in mobile development and AI APIs."
}

content['globals']['socials']['linkedin']['url'] = "https://linkedin.com/in/omarneyfar"

# Update hero section
content['sections']['hero']['components'][0]['variables']['headline'] = {
    "fr": "Omar Naifar",
    "en": "Omar Naifar"
}

content['sections']['hero']['components'][0]['variables']['description'] = {
    "fr": "Ingénieur Full-Stack spécialisé dans le développement d'applications web et mobiles évolutives. Expert en React, Vue.js, Next.js, Nest.js et intégration d'IA.",
    "en": "Full-Stack Engineer specialized in building scalable web and mobile applications. Expert in React, Vue.js, Next.js, Nest.js and AI integration."
}

# Update stats
content['sections']['stats']['components'][0]['variables']['stats'] = [
    {
        "value": "10+",
        "label": {
            "fr": "Projets Livrés",
            "en": "Projects Delivered"
        }
    },
    {
        "value": "2+",
        "label": {
            "fr": "Années d'Expérience",
            "en": "Years of Experience"
        }
    },
    {
        "value": "3",
        "label": {
            "fr": "Entreprises",
            "en": "Companies"
        }
    },
    {
        "value": "15+",
        "label": {
            "fr": "Technologies Maîtrisées",
            "en": "Technologies Mastered"
        }
    }
]

# Update skills with real technologies from CV
content['sections']['skills']['components'][0]['variables']['categories'] = [
    {
        "name": "Mobile Development",
        "skills": [
            {"name": "Flutter", "icon": "Smartphone", "level": 85},
            {"name": "Dart", "icon": "Code", "level": 85},
            {"name": "React Native", "icon": "Smartphone", "level": 80}
        ]
    },
    {
        "name": "Frontend",
        "skills": [
            {"name": "React.js", "icon": "Cpu", "level": 95},
            {"name": "Vue.js", "icon": "Layers", "level": 95},
            {"name": "Next.js", "icon": "Code", "level": 90},
            {"name": "TypeScript", "icon": "FileCode", "level": 90},
            {"name": "Tailwind CSS", "icon": "Palette", "level": 90},
            {"name": "Zustand", "icon": "Database", "level": 85},
            {"name": "Pinia", "icon": "Database", "level": 85}
        ]
    },
    {
        "name": "Backend",
        "skills": [
            {"name": "Node.js", "icon": "Server", "level": 90},
            {"name": "Nest.js", "icon": "Server", "level": 95},
            {"name": "Hono.js", "icon": "Zap", "level": 85},
            {"name": "Prisma ORM", "icon": "Database", "level": 90},
            {"name": "Strapi", "icon": "Package", "level": 80}
        ]
    },
    {
        "name": "AI & Cloud",
        "skills": [
            {"name": "ChatGPT API", "icon": "Brain", "level": 85},
            {"name": "Firebase", "icon": "Cloud", "level": 85},
            {"name": "Cloudflare", "icon": "Cloud", "level": 80},
            {"name": "GitLab CI/CD", "icon": "GitBranch", "level": 85},
            {"name": "GitHub Actions", "icon": "GitBranch", "level": 80}
        ]
    }
]

# Save to new-content.json
with open('data/new-content.json', 'w', encoding='utf-8') as f:
    json.dump(content, f, ensure_ascii=False, indent=2)

print("✅ Created new-content.json with updated CV data!")
print("📝 Updated: Personal info, skills, stats")
print("⏭️  Next: Run part 2 to update projects, timeline, education, achievements")
