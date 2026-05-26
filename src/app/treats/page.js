"use client";

import Link from "next/link";
import { useState } from "react";

const BREVO_FORM_URL = "https://d90ea7a6.sibforms.com/serve/MUIFAApk1BZ-DkGbkiMmLTPPayJCgPOsPLcp2iKo3JAdM3QCsKNMZtCIBl61c2AhfSxV64MTXF1Mb9sK7GQiNcwRyotUdJmFnK98Xx9NBBrMlw1xsj6yFwbQSrdcUmg6ALmjdKuUHCQhlfcWvd9Aq8M_dBDicLaraMRMLJDLdVx16gILIIdeC14Ewg89-9FP6K9tKtnRqUGdvmMMXw==";

export default function Treats() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const formData = new FormData();
      formData.append("EMAIL", trimmed);
      formData.append("email_address_check", "");
      formData.append("locale", "en");

      await fetch(BREVO_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="section section-cream" style={{ paddingTop: "5rem", paddingBottom: "1.5rem", textAlign: "center" }}>
        <div className="container">
          <div className="hero-eyebrow">Treats</div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 3.25rem)", maxWidth: "20ch", margin: "0 auto 1rem" }}>
            Real ingredients.<br /><em>Spoiled regulars.</em>
          </h1>
          <p className="section-lead" style={{ marginBottom: "0" }}>
            Small-batch treats for dogs and cats, made by hand, with ingredients
            we&rsquo;d happily feed our own crew. Given the size of the critter
            population here, that&rsquo;s a higher bar than it sounds.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section section-cream" style={{ paddingTop: "2.5rem" }}>
        <div className="container">
          <div className="section-eyebrow">What we make</div>
          <h2 className="section-title">
            Coming <em>July 2026.</em>
          </h2>

          <div className="pillars">
            <div className="pillar">
              <img src="/dogstamp.png" alt="" className="pillar-stamp" />
              <h3>For Dogs</h3>
              <p>
                Biscuits, training treats, every time you pass them in the
                living room and they stare at you with those sweet little
                puppy dogs eyes... you know, the everyday stuff. (Only
                joking... like all good things, in moderation of course.)
                Baked for dogs whose humans don&rsquo;t cut corners.
              </p>
            </div>
            <div className="pillar">
              <img src="/catstamp.png" alt="" className="pillar-stamp" />
              <h3>For Cats</h3>
              <p>
                Yes, them too. Whether they admit they want them or not.
                These are taking some time to refine because... cats. Before
                long, though, they&rsquo;ll be gracing our shelves and page.
              </p>
            </div>
            <div className="pillar" style={{ opacity: 0.85 }}>
              <img src="/horsestamp.png" alt="" className="pillar-stamp" />
              <h3>For Horses</h3>
              <p>
                Coming soon. We&rsquo;re not stopping there, either. (At
                least that&rsquo;s what the cows, pigs, goats, and chickens
                told us.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE CARD — Cat is in Charge */}
      <section className="section section-cream" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <img
            src="/thecatisincharge.png"
            alt="Reminder: the cat is in charge. We're just renters here. xo, Willow & Julianna"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </section>

      {/* SAGE BANNER — widow fix */}
      <section className="section section-sage" style={{ textAlign: "center" }}>
        <div className="content">
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 500,
            lineHeight: 1.5,
            color: "var(--soft-ink)",
            maxWidth: "32ch",
            margin: "0 auto",
          }}>
            Recipes built carefully and thoughtfully. Tested by an extensive
            committee of in-house and on-farm critics.
          </h2>
        </div>
      </section>

      {/* SIGNUP */}
      <section className="section section-cream" style={{ textAlign: "center" }}>
        <div className="content">
          <div className="section-eyebrow">First in line</div>
          <h2 className="section-title">
            Want to <em>know</em> when treats are ready?
          </h2>

          {status === "success" ? (
            <div style={{
              maxWidth: "32rem",
              margin: "2rem auto 0",
              padding: "1.5rem 1.5rem 1.75rem",
              background: "var(--cream-warm)",
              border: "1.5px solid var(--caramel)",
              borderRadius: "8px",
              textAlign: "center",
            }}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.2rem",
                lineHeight: 1.5,
                color: "var(--soft-ink)",
                margin: 0,
              }}>
                You&rsquo;re on the list. We&rsquo;ll be in touch the moment
                treats are ready. Now go give your critters a pet for us.
              </p>
            </div>
          ) : (
            <>
              <p className="section-lead">
                Drop your email and you&rsquo;ll be among the first to hear when the
                bakery opens in July 2026. No spam. We promise.
              </p>
              <p style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "var(--caramel)",
                margin: "0 auto 2rem",
                maxWidth: "36rem",
              }}>
                Tell your dog he&rsquo;s the best boy ever from us.
              </p>
              <form onSubmit={handleSubmit} className="signup" noValidate>
                <input
                  type="email"
                  placeholder="your email, please"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  disabled={status === "submitting"}
                  required
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Tell Me When"}
                </button>
              </form>
              {status === "error" && errorMsg && (
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "#c0392b",
                  marginTop: "1rem",
                }}>
                  {errorMsg}
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
