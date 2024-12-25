import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
  const members = [
    {
      name: "Ralph Edwards",
      role: "UI/UX Designer",
      image: 'https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_1.jpg',
      social: ["facebook", "twitter", "linkedin"],
    },
    {
      name: "Cody Fisher",
      role: "Web Developer",
      image: "https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_0.jpg",
      social: ["facebook", "twitter", "linkedin"],
    },
    {
      name: "Jerome Bell",
      role: "Senior Consultant",
      image: "https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_3.jpg",
      social: ["facebook", "twitter", "linkedin"],
    },
    {
      name: "Theresa Webb",
      role: "Senior Designer",
      image: "https://cdn.leonardo.ai/users/c1f6f8a6-26f6-465f-b33b-193bcfa9466d/generations/5f0d256b-6c81-41e9-9bac-1851cd45b7ea/Leonardo_Phoenix_09_Render_an_image_of_a_stunning_young_woman_2.jpg",
      social: ["facebook", "twitter", "linkedin"],
    },
  ];

  return (
    <section className="team-section">
      <h5>OUR EXPERT MEMBERS</h5>
      <h2>Make Brand Identities From Scratch And Help</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links">
                {member.social.map((platform, i) => (
                  <a
                    key={i}
                    href={`https://${platform}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${platform}`}
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
