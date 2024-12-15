export interface Testimonial {
  title: string;
  description: string;
  subtitle: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    title: "Manfred Mayer",
    description:
      "I’ve collaborated with Mohsin on several web applications, where he showcased expertise in Angular, SCSS, TypeScript, and Nx, delivering well-structured, maintainable code. His thoughtful approach to design, scalability, and user experience is commendable. While his strengths lie in front-end development, his familiarity with Java, Maven, and Jenkins enables him to support back-end and DevOps tasks when needed. Mohsin’s flexibility, communication skills, and positive attitude make him an invaluable team player.",
    subtitle: "Software Engineer | Founder at Pragtex Gmbh",
    imageUrl: "/images/developer.png",
  },
  {
    title: "Sameer Bhat",
    description:
      "I have had the pleasure of working with Mohsin on several software development projects, and he consistently impressed me with his programming skills and innovative approach. Mohsin's curiosity and eagerness to learn are evident in every task he undertakes, and he always brings a unique perspective to problem-solving. His ability to think outside the box and deliver results efficiently sets him apart as a programmer. Mohsin is a valuable team member and an asset to any project he joins.",
    subtitle: "Full Stack Developer | Founder at Cyberspark",
    imageUrl: "/images/developer.png",
  },
];
