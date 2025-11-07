import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./svgs";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <SecurityStats />
      <CTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="container-px mx-auto max-w-screen py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-primary" />
        <span className="font-bold">Fundex</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-subt">
        <Link href="#explore">Explore</Link>
        <Link href="#find-talent">Find Talent</Link>
        <Link href="#get-hired">Get Hired</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <div className="flex items-center gap-3">
        <Link className="text-subt" href="#login">
          Log in
        </Link>
        <Link className="button" href="#signup">
          Sign up
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="container-px mx-auto max-w-screen pt-8 pb-16">
      <div className="card grid md:grid-cols-2 gap-4 p-8 md:p-12">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="h1">
              Join the
              <br />
              waitlist
            </h1>
            <p className="p mt-6 max-w-md">
              Get your crypto loan today and accelerate your financial
              capabilities!
            </p>
          </div>
          <div className="mt-10">
            <Link href="#waitlist" className="button text-lg">
              Get Matched Now <ArrowRight />
            </Link>
            <p className="mt-3 text-xs text-subt">
              ✨ InstantMatch: Get matched with top design and development
              talent instantly
            </p>
          </div>
        </div>
        <div className="relative min-h-[340px]">
          <div className="absolute inset-0 rounded-2xl bg-muted" />
          {/* Placeholder for dashboard screenshot */}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <a href="#about" className="text-subt hover:text-white">
          About platform
        </a>
        <a href="#why" className="text-subt hover:text-white">
          Why Us
        </a>
        <a href="#features" className="text-subt hover:text-white">
          Features
        </a>
        <div className="text-right md:text-center col-span-2 md:col-span-1">
          <Image
            src="/cookieyes.svg"
            alt="CookieYes logo"
            width={120}
            height={22}
            className="opacity-70 inline"
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="container-px mx-auto max-w-screen py-16">
      <h2 className="h2">
        Explore the <span className="accent">new era</span> of financial
        services
      </h2>
      <p className="p mt-4 max-w-2xl">
        Fundex is an innovative cryptocurrency platform specializing in issuing
        loans and borrowings in cryptocurrency. Use assets as collateral and
        access credit without selling your digital assets.
      </p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="h-32 rounded-xl bg-muted mb-4" />
          <div className="font-semibold">
            Monitoring of financial indicators
          </div>
          <div className="p">Actionable analytics for growth.</div>
        </div>
        <div className="card p-6">
          <div className="h-32 rounded-xl bg-muted mb-4" />
          <div className="font-semibold">Increase in loan issuance</div>
          <div className="p">55% YoY in 2023.</div>
        </div>
        <div className="card p-6">
          <div className="h-32 rounded-xl bg-muted mb-4" />
          <div className="font-semibold">Partnerships and collaborations</div>
          <div className="p">Stronger together.</div>
        </div>
      </div>
    </section>
  );
}

function SecurityStats() {
  return (
    <section className="container-px mx-auto max-w-screen py-16">
      <h2 className="h2">
        Ensuring the <span className="accent">security and reliability</span> of
        the platform
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="text-subt">Smart contracts</div>
          <p className="p mt-2">
            Creation and deployment of smart contracts to automate issuing and
            returning funds based on specified conditions.
          </p>
          <div className="h-40 rounded-xl bg-muted mt-4" />
        </div>
        <div className="card p-6">
          <div className="text-subt">Development of credit history</div>
          <p className="p mt-2">
            Customers can improve their credit history and increase borrowing
            power.
          </p>
          <div className="h-40 rounded-xl bg-muted mt-4" />
        </div>
      </div>
      <div className="card p-6 mt-6">
        <div className="grid md:grid-cols-3 gap-6 items-end">
          <div className="col-span-2">
            <div className="h-48 rounded-xl bg-muted relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 flex items-end gap-2 p-4">
                <div className="h-12 bg-primary/60 w-8 rounded" />
                <div className="h-24 bg-primary/70 w-8 rounded" />
                <div className="h-40 bg-primary w-8 rounded" />
                <div className="h-28 bg-accent/70 w-8 rounded ml-10" />
              </div>
            </div>
          </div>
          <div>
            <div className="text-5xl font-extrabold">450%</div>
            <div className="p">The growth of loans issued amounted</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="container-px mx-auto max-w-screen py-16">
      <div className="card p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="h2">Fundex: Your 24/7 Salesperson is Here</div>
          <p className="p mt-2">
            Make sure your brand image won't get lost in the market noise.
          </p>
        </div>
        <Link href="#contact" className="button">
          Get in touch
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="container-px mx-auto max-w-screen py-16">
      <div className="text-[18vw] leading-none font-extrabold opacity-10 select-none">
        Fundex
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-subt">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#cookies">Cookies</a>
        </div>
        <div className="opacity-70">© 2025 Fundex</div>
      </div>
    </footer>
  );
}

export function svgs() {
  return null;
}
