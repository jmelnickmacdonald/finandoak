"use client";

import Link from "next/link";
import { useState } from "react";

const BREVO_FORM_URL = "https://d90ea7a6.sibforms.com/serve/MUIFAApk1BZ-DkGbkiMmLTPPayJCgPOsPLcp2iKo3JAdM3QCsKNMZtCIBl61c2AhfSxV64MTXF1Mb9sK7GQiNcwRyotUdJmFnK98Xx9NBBrMlw1xsj6yFwbQSrdcUmg6ALmjdKuUHCQhlfcWvd9Aq8M_dBDicLaraMRMLJDLdVx16gILIIdeC14Ewg89-9FP6K9tKtnRqUGdvmMMXw==";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic email validation
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
      {/* PANORAMA HERO */}
      <section style={{ width: "100%" }}>
        <img
          src="/finandoakcollagehero.png"
          alt="Fin and Oak — moments from the household"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* HEADLINE + SIGNATURE */}
      <section className="section section-cream headline-section" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)", textAlign: "center" }}>
        <div className="container">

          <h1 className="home-headline" style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "var(--soft-ink)",
            margin: "0 auto",
            maxWidth: "18ch",
          }}>
            <span className="home-headline-line">Small batches.</span>
            <span className="home-headline-line" style={{ color: "var(--coastal-blue)" }}>Big messes.</span>
            <span className="home-headline-line">Happy critters.</span>
          </h1>

          <p className="home-headline-sub" style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)",
            lineHeight: 1.65,
            color: "var(--muted-ink)",
            maxWidth: "44ch",
            margin: "clamp(1.5rem, 3vw, 2rem) auto clamp(3rem, 5vw, 4rem)",
          }}>
            Handmade treats for dogs, cats, and the rest of the menagerie
            &mdash; from a mom-and-daughter bakery in the heart of the
            Annapolis Valley.
          </p>

          <div style={{
            width: "80px",
            height: "2px",
            background: "var(--caramel)",
            opacity: 0.7,
            margin: "0 auto clamp(2.5rem, 4vw, 3.5rem)",
          }} />

          <h2 style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1.6rem, 2.8vw, 2.25rem)",
            lineHeight: 1.3,
            color: "var(--soft-ink)",
            marginBottom: "1.25rem",
          }}>
            Real ingredients. Spoiled regulars.
          </h2>

          <div style={{ maxWidth: "340px", margin: "0 auto clamp(2.5rem, 4vw, 3.5rem)" }}>
            <img
              src="/xowillowandjulianna.png"
              alt="xo, Willow & Julianna"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div style={{
            display: "inline-flex",
            gap: "1.5rem",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <a href="#signup" className="btn btn-primary">
              Tell me when →
            </a>
            <Link href="/story" style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--soft-ink)",
              borderBottom: "1.5px solid var(--soft-ink)",
              paddingBottom: "2px",
            }}>
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* THE NON-NEGOTIABLES — Coastal Blue */}
      <section className="section section-blue">
        <div className="container">
          <div className="section-eyebrow">The non-negotiables</div>
          <h2 className="section-title">
            Three things, <em>in this order.</em>
          </h2>

          <div className="pillars">
            <div className="pillar">
              <img src="/dogstamp.png" alt="" className="pillar-stamp" />
              <h3>Made by hand, in a real kitchen.</h3>
              <p>
                Not a factory and not a co-packer. An actual kitchen, in an
                actual house (ours to be specific) in Meadowvale, Nova Scotia.
              </p>
            </div>
            <div className="pillar">
              <img src="/catstamp.png" alt="" className="pillar-stamp" />
              <h3>Tested by a thorough and committed team of testers.</h3>
              <p>
                Two dogs, six cats, and a few chickens &mdash; who may not be the
                best judge of character (they&rsquo;ve been known to root through
                horse poop given the opportunity), but they are enthusiastic
                regardless.
              </p>
            </div>
            <div className="pillar">
              <img src="/horsestamp.png" alt="" className="pillar-stamp" />
              <h3>You&rsquo;ll know what&rsquo;s in it.</h3>
              <p>
                Every ingredient on the package, and every reason why it&rsquo;s
                in there in the first place. No &ldquo;natural flavours,&rdquo;
                no mystery binders, no fine print that needs a magnifying glass.
                If we wouldn&rsquo;t feed it to our own, it doesn&rsquo;t go in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE CARD — Just One Treat */}
      <section className="section section-cream" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <img
            src="/justonetreat.png"
            alt="You said 'just one treat.' We both know you're lying. xo, Willow & Julianna"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="section section-cream" style={{ textAlign: "center", paddingTop: "1rem" }}>
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
                bakery opens in July 2026. No spam, we promise!
              </p>
              <p style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: "var(--caramel)",
                margin: "0 auto 2rem",
                maxWidth: "36rem",
              }}>
                Give your pup a pet from us.
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
