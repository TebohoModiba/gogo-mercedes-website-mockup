import React from "react";
import { openWhatsApp } from "../config";

const TIKTOK_PROFILE = "https://www.tiktok.com/@gogo_mercedes";

// Add an item here only after its details have been confirmed in a TikTok post.
// For each event, include the original TikTok URL so visitors can check the source.
const events = [
  // {
  //   title: "Event title from the TikTok announcement",
  //   date: "Date confirmed in the post",
  //   location: "Confirmed venue or area",
  //   description: "A short summary based on the original announcement.",
  //   status: "Upcoming", // or "Past"
  //   videoUrl: "https://www.tiktok.com/@gogo_mercedes/video/VIDEO_ID",
  //   image: "/images/event-poster.jpg", // optional local poster/thumbnail
  // },
];

function EventCard({ event }) {
  return (
    <article className="social-event-card">
      {event.image ? (
        <img className="social-event-image" src={event.image} alt={`Poster for ${event.title}`} />
      ) : (
        <div className="social-event-image social-event-placeholder" aria-hidden="true">
          <span>Gogo Mercedes</span>
          <strong>Gatherings & community</strong>
        </div>
      )}
      <div className="social-event-content">
        <div className="social-event-meta">
          <span className={`event-status ${event.status === "Past" ? "event-status-past" : ""}`}>{event.status}</span>
          <span>{event.date}</span>
        </div>
        <h3>{event.title}</h3>
        {event.location && <p className="social-event-location">{event.location}</p>}
        <p>{event.description}</p>
        <div className="social-event-actions">
          {event.videoUrl && (
            <a className="text-link" href={event.videoUrl} target="_blank" rel="noreferrer">
              Watch original TikTok <span aria-hidden="true">↗</span>
            </a>
          )}
          <button
            className="text-link text-button"
            onClick={() => openWhatsApp(`Hello Gogo Mercedes, I would like to enquire about ${event.title}.`)}
          >
            Enquire on WhatsApp <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Events() {
  const upcomingEvents = events.filter((event) => event.status !== "Past");
  const pastEvents = events.filter((event) => event.status === "Past");

  return (
    <section className="section section-soft section-anchor" id="events">
      <div className="section-heading">
        <div>
          <div className="section-kicker"><span>05</span><i /> Gatherings & updates</div>
          <h2>Stay connected. <em>Be part of the gathering.</em></h2>
        </div>
        <p>Event announcements and community updates shared by Gogo Mercedes. Check the original TikTok post for the latest information.</p>
      </div>

      {upcomingEvents.length > 0 ? (
        <div className="social-events-grid">
          {upcomingEvents.map((event) => <EventCard key={`${event.title}-${event.date}`} event={event} />)}
        </div>
      ) : (
        <div className="events-empty-state">
          <span className="card-tag">Upcoming gatherings</span>
          <h3>New announcements will appear here.</h3>
          <p>Follow Gogo Mercedes on TikTok for event videos and announcements. Confirmed details will be added to this page as they become available.</p>
          <a className="button button-dark" href={TIKTOK_PROFILE} target="_blank" rel="noreferrer">
            Visit TikTok <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}

      {pastEvents.length > 0 && (
        <div className="past-events-block">
          <div className="past-events-heading">
            <span className="section-kicker">From the community</span>
            <h3>Past gatherings</h3>
          </div>
          <div className="social-events-grid">
            {pastEvents.map((event) => <EventCard key={`${event.title}-${event.date}`} event={event} />)}
          </div>
        </div>
      )}

      <div className="events-tiktok-note">
        <span className="tiktok-mark" aria-hidden="true">♪</span>
        <p>See videos and announcements directly from <strong>@gogo_mercedes</strong>.</p>
        <a href={TIKTOK_PROFILE} target="_blank" rel="noreferrer">Follow on TikTok <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
