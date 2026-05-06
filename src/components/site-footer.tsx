import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const columns = [
  {
    title: "Checking Accounts",
    body: (
      <>
        Choose the <FLink>checking account</FLink> that works best for you. See our <FLink>our Everyday Checking®</FLink> offer for new customers. Make purchases with your debit card, and bank from almost anywhere by phone, tablet or computer and more than 14,000 ATMs and 5,000 branches.
      </>
    ),
  },
  {
    title: "Savings Accounts & CDs",
    body: (
      <>
        It's never too early to begin saving. <FLink>Open a savings account</FLink> or open a Certificate of Deposit (<FLink>see interest rates</FLink>) and start saving your money.
      </>
    ),
  },
  {
    title: "Credit Cards",
    body: (
      <>
        our <FLink>credit cards</FLink> can help you buy the things you need. Many of our cards <FLink>offer rewards</FLink> that can be redeemed for <FLink>cash back</FLink> or <FLink>travel-related</FLink> perks. With so many options, it can be easy to find a card that matches your lifestyle. Plus, with Credit Journey you can get a <FLink>free credit score</FLink>!
      </>
    ),
  },
  {
    title: "Mortgages",
    body: (
      <>
        Apply for a <FLink>mortgage</FLink> or <FLink>refinance your mortgage</FLink> with our. View today's <FLink>mortgage rates</FLink> or calculate what you can afford with our <FLink>mortgage calculator</FLink>. Visit our <FLink>Education Center</FLink> for homebuying tips and more.
      </>
    ),
  },
];

const columnsRow2 = [
  {
    title: "Auto",
    body: (
      <>
        <FLink>Auto</FLink> is here to help you get the right car. Apply for <FLink>auto financing</FLink> for a new or used car. Use the <FLink>payment calculator</FLink> to estimate monthly payments. Check out the <FLink>Auto Education Center</FLink> to get car guidance from a trusted source.
      </>
    ),
  },
  {
    title: "For Business",
    body: (
      <>
        With <FLink>Business</FLink> you'll receive all-in-one services and guidance from a team of business professionals. Explore <FLink>business checking</FLink>, simplify payments acceptance with <FLink>merchant services</FLink>, and consider <FLink>small business loans</FLink> or <FLink>business credit cards</FLink> for help with growth. You can also visit our <FLink>business resource center</FLink>.
      </>
    ),
  },
  {
    title: "Sports & Entertainment",
    body: (
      <>
        We give you access to unique sports, entertainment and culinary events through <FLink>Experiences</FLink> and our exclusive partnerships such as the <FLink>US Open</FLink>, <FLink>Madison Square Garden</FLink> and <FLink>Center</FLink>.
      </>
    ),
  },
  {
    title: "Security Center",
    body: (
      <>
        Our <FLink>suite of security features</FLink> can <FLink>help you protect</FLink> your info, money and give you peace of mind. See how we're dedicated to helping <FLink>protect you</FLink>, your accounts and your loved ones from <FLink>financial abuse</FLink>. Also, <FLink>learn about the common tricks scammers are using</FLink> to help you stay one step ahead of them. If you see unauthorized charges or believe your account was compromised contact us right away to <FLink>report fraud</FLink>.
      </>
    ),
  },
];

const columnsRow3 = [
  {
    title: "About Us",
    body: (
      <>
        We serve millions of people with a broad range of products. <FLink>Online</FLink> lets you manage your accounts, view statements, monitor activity, pay bills or transfer funds securely from one central place. To learn more, visit the <FLink>Banking Education Center</FLink>. For questions or concerns, please contact <FLink>customer service</FLink> or let us know about <FLink>complaints and feedback</FLink>. View the <FLink>Community Reinvestment Act Public File</FLink> for the bank's latest CRA rating and other CRA-related information.
      </>
    ),
  },
  {
    title: "Investing by the Bank",
    body: (
      <>
        Partner with a global leader who puts your financial needs first. <FLink>Invest on your own</FLink> or <FLink>work with an advisor</FLink> — we have the <FLink>products</FLink>, <FLink>technology</FLink> and <FLink>investment education</FLink>, to help you grow your wealth. Visit a <FLink>Wealth Management Branch</FLink> or check out our latest online investing <FLink>features</FLink>, <FLink>offers, promotions, and coupons</FLink>.
        <br /><br />
        <strong className="text-foreground">INVESTMENT AND INSURANCE PRODUCTS ARE:</strong>
        <ul className="mt-2 list-disc pl-5 text-foreground">
          <li>NOT FDIC INSURED</li>
          <li>NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY</li>
          <li>NOT A DEPOSIT OR OTHER OBLIGATION OF, OR GUARANTEED BY, THE BANK, N.A. OR ANY OF ITS AFFILIATES</li>
          <li>SUBJECT TO INVESTMENT RISKS, INCLUDING POSSIBLE LOSS OF THE PRINCIPAL AMOUNT INVESTED</li>
        </ul>
      </>
    ),
  },
  {
    title: "Private Client",
    body: (
      <>
        Get more from a personalized relationship offering <FLink>no everyday banking fees</FLink>, priority service from a <FLink>dedicated team</FLink> and <FLink>special perks and benefits</FLink>. Connect with a Private Client Banker at your nearest <FLink>branch</FLink> to learn about eligibility requirements and all available benefits.
        <br /><br />
        <strong className="text-foreground">INVESTMENT AND INSURANCE PRODUCTS ARE:</strong>
        <ul className="mt-2 list-disc pl-5 text-foreground">
          <li>NOT A DEPOSIT</li>
          <li>NOT FDIC INSURED</li>
          <li>NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY</li>
          <li>NO BANK GUARANTEE</li>
          <li>MAY LOSE VALUE</li>
        </ul>
      </>
    ),
  },
];

function FLink({ children }: { children: React.ReactNode }) {
  return <a href="#" className="text-primary underline hover:no-underline">{children}</a>;
}

const bottomGroups = [
  { title: "Investing by the Bank", links: ["Online Investing", "Retirement", "Wealth Management", "Investment Advisors"] },
  { title: "Business Banking", links: ["Business Checking", "Merchant Services", "Business Credit Cards", "Loans & Lines of Credit"] },
  { title: "Commercial Banking", links: ["Industries", "Insights", "Solutions", "About Us"] },
  { title: "About our", links: ["Media Center", "Careers", "Investor Relations", "Sustainability"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-background text-foreground">
      {/* Top intro columns */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <Link to="/" className="flex items-center" aria-label="Home">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-semibold text-foreground">{c.title}</h4>
                <div className="mt-3 h-px w-10 bg-border" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {columnsRow2.map((c) => (
              <div key={c.title}>
                <h4 className="font-semibold text-foreground">{c.title}</h4>
                <div className="mt-3 h-px w-10 bg-border" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {columnsRow3.map((c) => (
              <div key={c.title}>
                <h4 className="font-semibold text-foreground">{c.title}</h4>
                <div className="mt-3 h-px w-10 bg-border" />
                <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary link grid */}
      <div className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {bottomGroups.map((g) => (
            <div key={g.title}>
              <h4 className="font-semibold text-foreground">{g.title}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {g.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-primary hover:underline">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Other Products & Services + socials */}
      <div className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:px-8">
          <div>
            <h4 className="font-semibold text-foreground">Other Products & Services:</h4>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-5">
              {["Deposit Account Agreements", "Mobile Banking", "Online Banking", "Student Center", "Zelle®"].map((l) => (
                <a key={l} href="#" className="text-primary hover:underline">{l}</a>
              ))}
            </div>
          </div>
          <div className="flex items-start justify-end gap-5 text-muted-foreground">
            <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5 hover:text-primary" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-primary" /></a>
          </div>
        </div>
      </div>

      {/* Legal + utility links */}
      <div className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:px-8">
          <div className="grid gap-6 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2">
            <p>
              "the Bank," and the Bank logo are trademarks of the Bank, N.A. The Bank, N.A. is a wholly-owned subsidiary of the Bank & Co.
            </p>
            <p>
              Bank deposit accounts, such as checking and savings, may be subject to approval. Deposit products and related services are offered by the Bank, N.A. Member FDIC.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            {["Customer Service", "J.P. Bank", "Bank Group", "Media Center", "Careers", "Site Map", "Privacy", "Security", "Terms of Use", "Accessibility", "AdChoices", "Give feedback"].map((l) => (
              <a key={l} href="#" className="text-primary hover:underline">{l}</a>
            ))}
            <span className="text-muted-foreground">Member FDIC</span>
            <span className="text-muted-foreground">⌂ Equal Housing Opportunity</span>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 lg:px-8">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} the Bank & Co.</p>
        </div>
      </div>
    </footer>
  );
}
