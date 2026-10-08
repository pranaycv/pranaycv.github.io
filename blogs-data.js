// Blog posts database
// Add your blog posts here in this format
const blogsData = [
    // Technology blogs
    {
        id: 'tech-003',
        category: 'technology',
        permalink: 'hack-the-north.html',
        title: 'Hack the North, After Twenty Years Away',
        punchline: 'I went back to Queen’s for MMAI and ended up at Hack the North — 36 hours, an international team, and a pair of glasses that turn gaze into music.',
        date: 'October 8, 2026',
        content: `
            <p>After nearly twenty years of building computer vision systems in industry, I went back to school. I joined Queen’s University’s Master of Management in Artificial Intelligence to get closer to the fundamentals of AI again. What I did not expect was Hack the North — a thousand students, 36 hours, and a 3D-printed camera sitting on my head while we tried to turn eye movement into music.</p>

            <p>Hack the North is one of Canada’s largest hackathons. This year they received about 7,000 applications and selected around 1,000 people. More than 350 teams started from scratch and tried to turn an idea into a working prototype before the weekend was over. Walking through the venue, it felt less like a competition and more like 350 small startups working side by side, each building something they cared about.</p>

            <p>The event was very well run — transportation, food, mentors, places to sleep, sponsor support. For us, the most valuable part was having technical teams from the sponsor companies right there. When the hardware or the software refused to cooperate at two in the morning, there was someone in the room who could actually help.</p>

            <h2>The idea I walked in with</h2>

            <p>I wanted to build something around computer vision and gaze tracking. The picture in my head was a pair of smart glasses that could look out at the world and also look in at the person’s eyes. If you know where someone is looking, and you can see what is in front of them, you can start to connect the two. That felt like a foundation for many different applications, not just one product.</p>

            <p>We ended up as a team of four, from different parts of the world and with very different backgrounds. One teammate from France came from aerospace engineering. He designed the 3D-printed headset we wore, and he was a very understanding person to work with through a long, messy weekend. Another, from Slovakia, brought mechanical engineering and very strong programming skills. The fourth was a Waterloo student from Calgary, with a kind of leadership that kept the team moving when things got difficult. I brought my years in computer vision and AI. Different ages, different strengths, different ways of solving problems. That mix was one of the best parts of the experience.</p>

            <figure>
                <img src="images/hack-the-north/team.jpg" alt="Four teammates around a classroom table during Hack the North, with a laptop open and glasses being fitted in the background." loading="lazy">
                <figcaption>Mid-build: four people, one table, and a prototype that still needed a reason to exist.</figcaption>
            </figure>

            <h2>How the idea became EyeMelody</h2>

            <p>We started with a gaze-tracking device, but a tracker by itself is not really a product. During the hackathon we kept asking who this might actually help. That led us to people with severe physical disabilities who may not be able to use their hands. Gaze is still something they have.</p>

            <p>That is how EyeMelody came about. The idea is to use looking as a way to make music. The headset tracks where you are looking. Different colored objects or cards are tied to different tones. As you look at them in sequence, the tones play in sequence, and you can build a melody using only your eyes. We wanted to see whether eye movement could become a new way of interacting with technology, and a way of expressing yourself.</p>

            <figure>
                <img src="images/hack-the-north/headset.jpg" alt="A head-mounted prototype with a purple 3D-printed arm, two cameras, and a FARPOINT headband worn over purple glasses." loading="lazy">
                <figcaption>One camera on the eyes, one on the world, held together with a printed arm and a headband.</figcaption>
            </figure>

            <h2>QNX, a Raspberry Pi, and the hard part</h2>

            <p>One of the biggest challenges was deciding what hardware and operating system we could actually get working in a weekend. We found QNX’s platform — a Raspberry Pi 5 running the QNX operating system. The real-time side of QNX mattered for us. Gaze tracking only feels right if the system responds quickly.</p>

            <p>Getting the libraries we needed onto that platform was not easy. We spent a lot of time on installation and configuration. The QNX technical team was extremely helpful, and with their support we eventually got the software environment running.</p>

            <p>From there we built the pipeline. A small neural network identified objects in the scene. Gaze tracking estimated where the person was looking. Then we mapped that gaze onto objects in the real world and played the matching sound. A lot of the development and hardware integration was in C++, which let us bring the computer-vision and AI pieces together with the embedded system. Seeing the whole path work — from the cameras, through gaze and the model, to the sound — was one of the most rewarding parts of the project.</p>

            <figure>
                <img src="images/hack-the-north/dashboard.jpg" alt="The EyeMelody laptop interface showing an inner-camera eye lock view on the left and an outer-camera gaze point view on the right." loading="lazy">
                <figcaption>The live view: eye lock on the left, gaze in the scene on the right.</figcaption>
            </figure>

            <h2>What Queen’s MMAI actually changed</h2>

            <p>My time in the Queen’s MMAI program helped me directly during the hackathon. We had worked through machine-learning concepts and a couple of Kaggle competitions, so I was used to thinking about how a model is built, not only what it outputs. The program also gave me a stronger foundation in the mathematics behind AI and deep learning. That made it possible to implement the vision pieces instead of treating the model as a black box.</p>

            <p>More than that, MMAI gave me a way to come back to technology from an academic side after many years in industry, and then put that learning to work in a completely different environment.</p>

            <h2>The QNX challenge</h2>

            <p>Our team won the QNX-sponsored challenge: “Create an Embedded System with QNX that Uses AI.” That meant a lot, because the project sat at the intersection of things I care about: AI, computer vision, embedded systems, and human-computer interaction. We were able to show, in a rough but working prototype, how those pieces could live together on QNX hardware.</p>

            <figure>
                <img src="images/hack-the-north/stage.jpg" alt="The Hack the North stage with QNX slides listing EyeMelody among the Embedded System with AI projects." loading="lazy">
                <figcaption>On stage at Hack the North, as QNX named the embedded AI projects of the weekend — including EyeMelody.</figcaption>
            </figure>

            <p>The code for the prototype is <a href="https://github.com/pranaycv/htn-gaze" target="_blank" rel="noopener noreferrer">on GitHub</a>.</p>

            <h2>What stayed with me</h2>

            <p>The prize was not the main thing. What impressed me most was the talent, energy, and determination among the younger people around us. Working beside students who were so passionate about building things was genuinely inspiring.</p>

            <p>The weekend also reinforced something I have been seeing in industry: AI is shortening the path from an idea to a working prototype. Things that might have taken months or years to even try can now be tested in a weekend. Accessible hardware, capable models, and people who will stay up to wire a camera to a headband — that combination turns sketches into something you can actually hold.</p>

            <blockquote>For me, Hack the North was a chance to step outside my usual professional environment, learn from a new generation of engineers, and put what I am learning at Queen’s to work in a real setting.</blockquote>

            <p>Coming back to school after twenty years, and then having a weekend like this, has been a very rewarding part of my MMAI journey. Not because we won a challenge, but because we got to find out, quickly, whether a gaze could become a melody — and because the people around us were already onto the next idea.</p>
        `
    },
    {
        id: 'tech-001',
        category: 'technology',
        title: 'The Silent Revolution of Artificial Intelligence',
        punchline: 'How AI is reshaping our world in ways we barely notice, yet profoundly experience.',
        date: 'January 10, 2025',
        content: `
            <p>We stand at the cusp of a transformation so gradual, yet so profound, that most of us fail to recognize its magnitude. Artificial Intelligence isn't just changing technology—it's redefining the very fabric of human existence.</p>

            <p>Every morning, millions wake up to AI-curated news feeds, AI-optimized traffic routes, and AI-generated recommendations. The invisible hand of machine learning guides our choices, predicts our needs, and increasingly, shapes our reality.</p>

            <h2>The Invisible Integration</h2>

            <p>The most remarkable aspect of this revolution is its subtlety. Unlike the internet boom or the smartphone era, AI's integration into daily life happens beneath the surface. It doesn't demand our attention; it quietly enhances our experiences.</p>

            <p>Consider your email inbox. AI filters spam, categorizes messages, and suggests responses. Your photo library automatically organizes itself. Your music streaming service knows your mood before you do. These aren't isolated features—they're glimpses of a future where AI anticipates and fulfills our needs seamlessly.</p>

            <h2>The Human Question</h2>

            <p>But as we delegate more decisions to algorithms, a critical question emerges: Are we becoming more free, or more constrained? When AI recommends what to read, watch, and buy, do we gain convenience or lose serendipity?</p>

            <p>The answer isn't binary. AI amplifies our capabilities while potentially narrowing our horizons. The key lies not in rejecting this technology, but in maintaining awareness of its influence and preserving our agency within AI-augmented systems.</p>

            <blockquote>"The future belongs to those who can dance with machines while remaining fundamentally human."</blockquote>

            <p>As we navigate this silent revolution, our challenge isn't to resist AI, but to ensure that its development remains aligned with human values, creativity, and the irreplaceable qualities that define our species.</p>
        `
    },
    {
        id: 'tech-002',
        category: 'technology',
        title: 'Open Source: The Democratic Foundation of Digital Future',
        punchline: 'Why the future of technology depends on collaboration over competition.',
        date: 'January 5, 2025',
        content: `
            <p>In an era dominated by tech giants and proprietary systems, open source software represents something revolutionary: a digital commons where knowledge is shared, not hoarded.</p>

            <p>The philosophy behind open source transcends mere code. It embodies a belief that collective intelligence surpasses individual genius, that transparency breeds trust, and that true innovation flourishes in collaborative environments.</p>

            <h2>The Power of Transparency</h2>

            <p>Open source projects operate under a simple yet powerful principle: anyone can view, modify, and distribute the code. This transparency creates natural accountability. Bugs get discovered faster, security vulnerabilities are addressed more rapidly, and innovations spread more widely.</p>

            <p>Consider Linux, the operating system that powers most of the internet's servers, Android phones, and countless embedded systems. It exists not because one company built it, but because thousands of developers worldwide contributed to its evolution.</p>

            <h2>Beyond Software</h2>

            <p>The open source philosophy is expanding beyond software into hardware, science, education, and even governance. Open-source hardware projects like Arduino have democratized electronics. Open-access academic journals are challenging the traditional publishing model. Open data initiatives are making government more transparent.</p>

            <p>This movement represents a fundamental shift in how we think about innovation, ownership, and progress. In a world facing complex, interconnected challenges—climate change, healthcare, inequality—the collaborative, transparent approach of open source offers a model for collective problem-solving.</p>

            <p>The question isn't whether open source will shape our future. It's whether we'll embrace its principles broadly enough to address the pressing challenges of our time.</p>
        `
    },

    // Science blogs
    {
        id: 'sci-001',
        category: 'science',
        title: 'The Quantum Realm: Where Reality Gets Strange',
        punchline: 'Exploring the bizarre world of quantum mechanics and what it tells us about the nature of existence.',
        date: 'January 8, 2025',
        content: `
            <p>Imagine a world where particles exist in multiple places simultaneously, where observation changes reality, and where information can teleport across vast distances. This isn't science fiction—it's quantum mechanics, the most successful yet perplexing theory in physics.</p>

            <h2>The Double Slit Mystery</h2>

            <p>The famous double-slit experiment reveals quantum mechanics' central paradox. Fire electrons through two slits, and they create an interference pattern—suggesting each electron passes through both slits simultaneously. But observe which slit an electron passes through, and the interference pattern disappears.</p>

            <p>This isn't a limitation of our measurement tools. It's a fundamental feature of reality: the act of observation collapses quantum possibilities into definite outcomes. Before measurement, particles exist in a "superposition" of all possible states.</p>

            <h2>Entanglement: Spooky Action at a Distance</h2>

            <p>Perhaps quantum mechanics' strangest feature is entanglement. When particles become entangled, measuring one instantly affects the other, regardless of distance. Einstein famously called this "spooky action at a distance," and it troubled him deeply.</p>

            <p>Yet experiments repeatedly confirm entanglement's reality. It's not just theoretical—it's the basis for emerging quantum technologies like quantum computing and quantum cryptography.</p>

            <h2>Implications for Reality</h2>

            <p>Quantum mechanics forces us to reconsider fundamental assumptions about reality. Is the universe fundamentally deterministic or probabilistic? Do particles have definite properties before measurement? Does consciousness play a role in collapsing quantum states?</p>

            <blockquote>"If quantum mechanics hasn't profoundly shocked you, you haven't understood it yet." - Niels Bohr</blockquote>

            <p>These aren't just philosophical questions. They shape our understanding of everything from the nature of time to the possibility of parallel universes. The quantum realm remains physics' greatest mystery and most profound revelation about the universe's fundamental nature.</p>
        `
    },

    // Philosophy blogs
    {
        id: 'phil-001',
        category: 'philosophy',
        title: 'The Paradox of Choice: Are We Too Free?',
        punchline: 'In a world of infinite options, how do we find meaning in our decisions?',
        date: 'January 7, 2025',
        content: `
            <p>We live in an age of unprecedented freedom. Our ancestors faced limited choices in career, partner, lifestyle, and belief. Today, we navigate an overwhelming abundance of options in virtually every domain of life.</p>

            <p>Yet this expansion of choice hasn't brought the happiness we expected. Instead, many experience anxiety, regret, and a persistent sense that we're missing out on better alternatives. What's happening?</p>

            <h2>The Tyranny of Options</h2>

            <p>Psychologist Barry Schwartz called it "the paradox of choice": beyond a certain point, more options decrease satisfaction rather than increase it. Each additional choice demands cognitive effort, raises expectations, and multiplies potential regrets.</p>

            <p>Consider a simple grocery trip. Facing 150 types of cereal, we don't feel liberated—we feel overwhelmed. After finally choosing, we're less satisfied because we imagine the alternatives might have been better.</p>

            <h2>The Search for Meaning</h2>

            <p>This paradox extends beyond consumer goods to life's most significant decisions. Choosing a career path, a romantic partner, or a place to live feels more difficult when any option seems possible. Freedom without framework becomes paralysis.</p>

            <p>Philosopher Søren Kierkegaard anticipated this dilemma in the 19th century. He argued that unlimited possibility creates despair—we need constraints to forge meaningful identities and commitments.</p>

            <h2>Embracing Limitations</h2>

            <p>The solution isn't to eliminate choice, but to embrace strategic limitation. By voluntarily constraining our options—through habits, commitments, and values—we create space for depth over breadth, mastery over sampling, meaning over maximizing.</p>

            <blockquote>"The enemy of a good life is not hardship but abundance without purpose."</blockquote>

            <p>True freedom isn't having infinite options. It's having the wisdom to choose which limitations give our lives shape, direction, and meaning.</p>
        `
    },

    // Poetry
    {
        id: 'poet-001',
        category: 'poetry',
        title: 'Whispers of Dawn',
        punchline: 'A meditation on new beginnings and the quiet courage it takes to start again.',
        date: 'January 9, 2025',
        content: `
            <p style="text-align: center; font-style: italic; font-size: 1.2rem;">
                <br>
                In the hush before sunrise,<br>
                when darkness holds its breath,<br>
                I find myself suspended<br>
                between yesterday's death<br>
                and tomorrow's first promise.<br>
                <br><br>
                The world sleeps, unknowing,<br>
                as I trace memories in mist—<br>
                fragments of conversations,<br>
                the touch of a hand I've missed,<br>
                dreams that dissolved at waking.<br>
                <br><br>
                But dawn doesn't ask permission<br>
                to crack the sky with gold.<br>
                It simply arrives, persistent,<br>
                turning the familiar bold,<br>
                painting everything new again.<br>
                <br><br>
                And so I learn from daybreak:<br>
                that courage isn't loud,<br>
                it's the quiet decision to rise<br>
                when comfort whispers to stay bowed—<br>
                to begin, again, always again.<br>
                <br>
            </p>

            <p>This poem emerged during a particularly difficult period of transition. I wrote it while watching the sunrise from my window, struck by how nature simply continues—indifferent to our struggles, yet somehow comforting in its reliability.</p>

            <p>Dawn doesn't negotiate. It doesn't wait for us to feel ready. It simply arrives, transforming darkness into light through nothing more than the patient rotation of the Earth. There's something profound in that inevitability, a reminder that renewal isn't something we must earn or deserve—it's built into the architecture of existence.</p>

            <p>Perhaps that's what we need most: permission to start again, not because we've figured everything out, but simply because the sun rises whether we're ready or not.</p>
        `
    },

    // Photo Story
    {
        id: 'photo-001',
        category: 'photo-story',
        title: 'Streets After Rain',
        punchline: 'Finding beauty in reflections, puddles, and the transformed familiar.',
        date: 'January 6, 2025',
        content: `
            <p><em>Note: This is a template for photo stories. Replace the placeholder text with your actual photos and descriptions.</em></p>

            <h2>The Transformation</h2>

            <p>There's something magical about familiar streets after rain. The same paths I walk every day become unrecognizable—not through any grand change, but through the simple addition of water and light.</p>

            <p><em>[Photo would go here: A puddle reflecting the sky and buildings, turning the world upside down]</em></p>

            <p>Puddles become portals to inverted realities. The concrete transforms into mirrors, offering alternative perspectives on the ordinary. What we usually see from eye level suddenly appears from below, the sky where the ground should be.</p>

            <h2>Light and Texture</h2>

            <p><em>[Photo would go here: Water droplets on leaves, catching golden hour light]</em></p>

            <p>Rain doesn't just add water—it adds dimension. Surfaces become textured with droplets. Light fragments into countless tiny prisms. The air itself seems to shimmer with possibility.</p>

            <h2>The Quiet After</h2>

            <p><em>[Photo would go here: Empty street with wet pavement reflecting neon signs at dusk]</em></p>

            <p>In the quiet after rain, before the world resumes its usual rhythm, there's a pause. The streets are emptier, sounds are muffled, and everything feels momentarily suspended. This is when I do my best photography—not capturing what is, but what might be, in the space between storm and sun.</p>

            <p>These photos remind me that transformation doesn't require dramatic change. Sometimes, a different light, a new angle, or a shift in perspective reveals that the extraordinary was always hiding in the ordinary, waiting for us to notice.</p>
        `
    },

    // Politics
    {
        id: 'pol-001',
        category: 'politics',
        title: 'The Death of Political Nuance',
        punchline: 'How polarization is destroying our ability to think clearly about complex issues.',
        date: 'January 4, 2025',
        content: `
            <p>Something fundamental has broken in our political discourse. We've lost the ability to hold complex, nuanced positions on difficult issues. Instead, every topic gets reduced to binary choice: you're with us or against us, progressive or conservative, enlightened or ignorant.</p>

            <p>This isn't just unfortunate—it's dangerous. The most important questions facing our society don't have simple answers. Climate policy must balance environmental protection with economic reality. Healthcare reform requires navigating trade-offs between access, quality, and cost. Immigration policy involves competing moral intuitions and practical constraints.</p>

            <h2>The Polarization Machine</h2>

            <p>Our information ecosystem actively discourages nuanced thinking. Social media algorithms reward extreme positions because outrage drives engagement. News outlets cater to partisan audiences because neutrality doesn't monetize well. Political parties enforce ideological purity because compromise appears weak.</p>

            <p>The result? We self-sort into echo chambers where our views get reinforced rather than challenged. We consume information that confirms our beliefs while dismissing contradictory evidence as propaganda. We mistake agreement for truth and opposition for bad faith.</p>

            <h2>The Cost of Certainty</h2>

            <p>Political tribalism extracts a devastating cognitive cost. When we treat politics as team sport rather than collective problem-solving, we lose the ability to:</p>

            <p>• Acknowledge legitimate concerns from people we disagree with<br>
            • Recognize trade-offs and unintended consequences<br>
            • Update our views based on new evidence<br>
            • Distinguish between policy disagreements and personal character<br>
            • Find common ground on shared values despite tactical differences</p>

            <h2>Reclaiming Complexity</h2>

            <p>The path forward isn't centrist mushiness or false equivalence. It's intellectual honesty: acknowledging that most policy questions involve genuine trade-offs, that people of good faith can disagree, and that certainty is often inversely proportional to understanding.</p>

            <blockquote>"The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function." - F. Scott Fitzgerald</blockquote>

            <p>We need citizens who can think clearly about difficult issues, leaders who can articulate complex positions, and institutions that reward thoughtfulness over tribalism. Until then, we'll continue substituting simple narratives for hard truths, and shouting for listening.</p>
        `
    }
];

// Helper function to get all blogs in a category
function getBlogsByCategory(category) {
    return blogsData.filter(blog => blog.category === category);
}

// Helper function to get a single blog by ID
function getBlogById(id) {
    return blogsData.find(blog => blog.id === id);
}

// Helper function to get recent blogs (for homepage or sidebar)
function getRecentBlogs(limit = 5) {
    return blogsData.slice(0, limit);
}