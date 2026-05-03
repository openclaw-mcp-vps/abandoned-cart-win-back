export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          E-commerce Ops
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Win back abandoned carts with{" "}
          <span className="text-[#58a6ff]">personalized campaigns</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CartReclaim connects to your store via webhooks, analyzes customer behavior, and automatically fires personalized email sequences with smart discount timing — so you recover revenue on autopilot.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start recovering carts — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">3×</div>
            <div className="text-sm text-[#8b949e]">Average revenue recovered vs. no follow-up</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">68%</div>
            <div className="text-sm text-[#8b949e]">Of carts are abandoned before checkout</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">&lt;5 min</div>
            <div className="text-sm text-[#8b949e]">Setup time with our webhook integration</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, flat pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$17</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited abandoned cart tracking",
              "Automated 3-step email sequences",
              "Dynamic discount engine",
              "ML-powered send-time optimization",
              "Webhook support for Shopify, WooCommerce & more",
              "Real-time recovery dashboard",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get started — $17/mo
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial. No credit card needed.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which e-commerce platforms are supported?</h3>
            <p className="text-sm text-[#8b949e]">CartReclaim works with any platform that supports webhooks — including Shopify, WooCommerce, BigCommerce, and custom stores. Setup takes under 5 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the discount strategy work?</h3>
            <p className="text-sm text-[#8b949e]">Our engine analyzes cart value, customer history, and product margins to offer the smallest discount needed to convert — protecting your profit while maximizing recovery.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I customize the email sequences?</h3>
            <p className="text-sm text-[#8b949e]">Yes. You can edit subject lines, body copy, timing intervals, and discount thresholds for each step in the sequence from your dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} CartReclaim. All rights reserved.
      </footer>
    </main>
  );
}
