"use client"

import Image from "next/image"
import { Rocket, BarChart3, Twitter, TextIcon as Telegram, Github, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation, StaggerContainer } from "@/components/scroll-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className="text-purple-900 font-bold text-xl">D</span>
          </div>
          <span className="font-bold text-xl">DogeMoon</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-yellow-400 transition-colors">
            About
          </a>
          <a href="#tokenomics" className="hover:text-yellow-400 transition-colors">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-yellow-400 transition-colors">
            Roadmap
          </a>
          <a href="#faq" className="hover:text-yellow-400 transition-colors">
            FAQ
          </a>
        </nav>
        <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold">Buy Now</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <ScrollAnimation className="md:w-1/2 space-y-6" direction="left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            To The Moon <br />
            <span className="text-yellow-400">And Beyond!</span>
          </h1>
          <p className="text-xl text-purple-200">
            DogeMoon is not just another meme coin. It&apos;s a community-driven token with real utility and a mission to
            reach the stars!
          </p>
          <div className="flex gap-4 pt-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-8 py-6">
              Buy DogeMoon
            </Button>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6">
              Read Whitepaper
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-purple-900 flex items-center justify-center"
                >
                  <span className="text-xs">🚀</span>
                </div>
              ))}
            </div>
            <p className="text-purple-200">
              <span className="text-white font-bold">10,000+</span> holders and growing!
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation className="md:w-1/2 flex justify-center mt-10 md:mt-0" direction="right" delay={0.2}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-bounce-slow">
            <div className="absolute inset-0 rounded-full bg-yellow-400 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="DogeMoon Logo"
                width={320}
                height={320}
                className="p-4"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border-2 border-yellow-400/30 border-dashed animate-spin-slow"></div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-purple-800/70 transition-colors duration-300">
            <h3 className="text-yellow-400 text-4xl font-bold">$42M</h3>
            <p className="text-purple-200 mt-2">Market Cap</p>
          </div>
          <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-purple-800/70 transition-colors duration-300">
            <h3 className="text-yellow-400 text-4xl font-bold">100B</h3>
            <p className="text-purple-200 mt-2">Total Supply</p>
          </div>
          <div className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-purple-800/70 transition-colors duration-300">
            <h3 className="text-yellow-400 text-4xl font-bold">50%</h3>
            <p className="text-purple-200 mt-2">Burned Forever</p>
          </div>
        </StaggerContainer>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <ScrollAnimation className="text-center mb-16" direction="up">
          <h2 className="text-4xl font-bold mb-4">About DogeMoon</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Born from the stars and raised by the community, DogeMoon is on a mission to become the most recognizable
            meme coin in the galaxy.
          </p>
        </ScrollAnimation>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-purple-800/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Driven</h3>
            <p className="text-purple-200">
              Our community is at the heart of everything we do. DogeMoon is owned by the people, for the people.
            </p>
          </div>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-purple-800/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Deflationary Model</h3>
            <p className="text-purple-200">
              With our unique tokenomics, DogeMoon becomes more scarce over time, potentially increasing value for
              holders.
            </p>
          </div>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-purple-800/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-6">
              <Github className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fully Transparent</h3>
            <p className="text-purple-200">
              Our code is open source, our team is doxxed, and our transactions are public. We believe in full
              transparency.
            </p>
          </div>
        </StaggerContainer>
      </section>

      {/* Tokenomics Section */}
      <section
        id="tokenomics"
        className="container mx-auto px-4 py-20 bg-purple-800/20 backdrop-blur-sm rounded-3xl my-20"
      >
        <ScrollAnimation className="text-center mb-16" direction="up">
          <h2 className="text-4xl font-bold mb-4">Tokenomics</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Our tokenomics are designed to reward holders and ensure the long-term success of DogeMoon.
          </p>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            <div className="bg-purple-700/50 rounded-xl p-6 hover:bg-purple-700/70 transition-all duration-300">
              <div className="flex justify-between mb-2">
                <span>Community Allocation</span>
                <span className="font-bold">40%</span>
              </div>
              <div className="w-full bg-purple-900 rounded-full h-4 overflow-hidden">
                <div className="bg-yellow-400 h-4 rounded-full animate-width" style={{ width: "40%" }}></div>
              </div>
            </div>
            <div className="bg-purple-700/50 rounded-xl p-6 hover:bg-purple-700/70 transition-all duration-300">
              <div className="flex justify-between mb-2">
                <span>Liquidity Pool</span>
                <span className="font-bold">30%</span>
              </div>
              <div className="w-full bg-purple-900 rounded-full h-4 overflow-hidden">
                <div className="bg-yellow-400 h-4 rounded-full animate-width" style={{ width: "30%" }}></div>
              </div>
            </div>
            <div className="bg-purple-700/50 rounded-xl p-6 hover:bg-purple-700/70 transition-all duration-300">
              <div className="flex justify-between mb-2">
                <span>Team & Development</span>
                <span className="font-bold">15%</span>
              </div>
              <div className="w-full bg-purple-900 rounded-full h-4 overflow-hidden">
                <div className="bg-yellow-400 h-4 rounded-full animate-width" style={{ width: "15%" }}></div>
              </div>
            </div>
            <div className="bg-purple-700/50 rounded-xl p-6 hover:bg-purple-700/70 transition-all duration-300">
              <div className="flex justify-between mb-2">
                <span>Marketing</span>
                <span className="font-bold">10%</span>
              </div>
              <div className="w-full bg-purple-900 rounded-full h-4 overflow-hidden">
                <div className="bg-yellow-400 h-4 rounded-full animate-width" style={{ width: "10%" }}></div>
              </div>
            </div>
            <div className="bg-purple-700/50 rounded-xl p-6 hover:bg-purple-700/70 transition-all duration-300">
              <div className="flex justify-between mb-2">
                <span>Charity</span>
                <span className="font-bold">5%</span>
              </div>
              <div className="w-full bg-purple-900 rounded-full h-4 overflow-hidden">
                <div className="bg-yellow-400 h-4 rounded-full animate-width" style={{ width: "5%" }}></div>
              </div>
            </div>
          </StaggerContainer>
          <ScrollAnimation
            className="bg-purple-700/50 rounded-xl p-8 hover:bg-purple-700/60 transition-all duration-300"
            direction="left"
            delay={0.3}
          >
            <h3 className="text-2xl font-bold mb-6">Transaction Tax</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    Redistribution to Holders
                  </span>
                  <span className="font-bold">3%</span>
                </div>
                <p className="text-purple-200 text-sm">3% of each transaction is redistributed to all token holders.</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    Added to Liquidity
                  </span>
                  <span className="font-bold">2%</span>
                </div>
                <p className="text-purple-200 text-sm">2% of each transaction is added to the liquidity pool.</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    Burned Forever
                  </span>
                  <span className="font-bold">1%</span>
                </div>
                <p className="text-purple-200 text-sm">
                  1% of each transaction is burned forever, reducing the total supply.
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    Marketing & Development
                  </span>
                  <span className="font-bold">2%</span>
                </div>
                <p className="text-purple-200 text-sm">
                  2% of each transaction goes to the marketing and development fund.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="container mx-auto px-4 py-20">
        <ScrollAnimation className="text-center mb-16" direction="up">
          <h2 className="text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Our journey to the moon is just beginning. Here&apos;s what we have planned for the future.
          </p>
        </ScrollAnimation>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400/30"></div>
          <div className="space-y-24">
            <ScrollAnimation direction="right" delay={0.1}>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-purple-900 font-bold">1</span>
                </div>
                <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:w-1/2 bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 relative hover:bg-purple-800/50 transition-all duration-300">
                  <div className="absolute top-8 -left-12 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Phase 1: Launch</h3>
                  <ul className="space-y-2 text-purple-200">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      Website Launch
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      Social Media Setup
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      Token Launch on DEX
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      Community Building
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-purple-900 font-bold">2</span>
                </div>
                <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:w-1/2 bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 relative hover:bg-purple-800/50 transition-all duration-300">
                  <div className="absolute top-8 -right-12 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-yellow-400 transform rotate-180" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Phase 2: Growth</h3>
                  <ul className="space-y-2 text-purple-200">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      CoinGecko & CoinMarketCap Listings
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mt-1">
                        <span className="text-xs">→</span>
                      </div>
                      10,000+ Holders
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      Marketing Campaigns
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      Community Expansion
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-purple-900 font-bold">3</span>
                </div>
                <div className="ml-auto mr-8 md:mr-auto md:ml-8 md:w-1/2 bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 relative hover:bg-purple-800/50 transition-all duration-300">
                  <div className="absolute top-8 -left-12 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Phase 3: Expansion</h3>
                  <ul className="space-y-2 text-purple-200">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      CEX Listings
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      DogeMoon NFT Collection
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      DogeMoon Swap Launch
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      Strategic Partnerships
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={0.4}>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-purple-900 font-bold">4</span>
                </div>
                <div className="mr-auto ml-8 md:ml-auto md:mr-8 md:w-1/2 bg-purple-800/30 backdrop-blur-sm rounded-2xl p-8 relative hover:bg-purple-800/50 transition-all duration-300">
                  <div className="absolute top-8 -right-12 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-yellow-400 transform rotate-180" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Phase 4: To The Moon</h3>
                  <ul className="space-y-2 text-purple-200">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      DogeMoon Metaverse
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      DogeMoon Blockchain
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      Global Adoption
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center mt-1">
                        <span className="text-xs">○</span>
                      </div>
                      Moon Landing 🚀
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <ScrollAnimation className="text-center mb-16" direction="up">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">Got questions? We&apos;ve got answers.</p>
        </ScrollAnimation>
        <StaggerContainer className="max-w-3xl mx-auto space-y-6" staggerDelay={0.1}>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-800/50 transition-all duration-300">
            <button className="flex justify-between items-center w-full text-left">
              <h3 className="text-xl font-bold">What is DogeMoon?</h3>
              <ChevronDown className="w-5 h-5 text-yellow-400" />
            </button>
            <div className="mt-4 text-purple-200">
              <p>
                DogeMoon is a community-driven meme coin built on the Ethereum blockchain. It combines the fun of meme
                coins with real utility and a strong community focus.
              </p>
            </div>
          </div>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-800/50 transition-all duration-300">
            <button className="flex justify-between items-center w-full text-left">
              <h3 className="text-xl font-bold">How do I buy DogeMoon?</h3>
              <ChevronDown className="w-5 h-5 text-yellow-400" />
            </button>
            <div className="mt-4 text-purple-200">
              <p>
                You can buy DogeMoon on decentralized exchanges like Uniswap. You&apos;ll need ETH in your wallet and to
                connect to the exchange to make the swap.
              </p>
            </div>
          </div>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-800/50 transition-all duration-300">
            <button className="flex justify-between items-center w-full text-left">
              <h3 className="text-xl font-bold">Is the team doxxed?</h3>
              <ChevronDown className="w-5 h-5 text-yellow-400" />
            </button>
            <div className="mt-4 text-purple-200">
              <p>
                Yes, our core team members are fully doxxed and have extensive experience in the crypto space. You can
                find more information about our team on the About page.
              </p>
            </div>
          </div>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-800/50 transition-all duration-300">
            <button className="flex justify-between items-center w-full text-left">
              <h3 className="text-xl font-bold">Is the contract audited?</h3>
              <ChevronDown className="w-5 h-5 text-yellow-400" />
            </button>
            <div className="mt-4 text-purple-200">
              <p>
                Yes, our contract has been audited by CertiK and SolidProof. You can find the audit reports on our
                GitHub page.
              </p>
            </div>
          </div>
          <div className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-purple-800/50 transition-all duration-300">
            <button className="flex justify-between items-center w-full text-left">
              <h3 className="text-xl font-bold">What makes DogeMoon different?</h3>
              <ChevronDown className="w-5 h-5 text-yellow-400" />
            </button>
            <div className="mt-4 text-purple-200">
              <p>
                DogeMoon stands out with its strong community focus, transparent team, deflationary tokenomics, and
                ambitious roadmap that includes real utility beyond just being a meme coin.
              </p>
            </div>
          </div>
        </StaggerContainer>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-4 py-20">
        <ScrollAnimation className="text-center mb-16" direction="up">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Become part of the fastest growing meme coin community in the galaxy!
          </p>
        </ScrollAnimation>
        <StaggerContainer className="flex flex-wrap justify-center gap-6" staggerDelay={0.15} direction="up">
          <a
            href="#"
            className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:bg-purple-800/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Twitter className="w-8 h-8 text-yellow-400" />
            <span className="font-bold">Twitter</span>
          </a>
          <a
            href="#"
            className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:bg-purple-800/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Telegram className="w-8 h-8 text-yellow-400" />
            <span className="font-bold">Telegram</span>
          </a>
          <a
            href="#"
            className="bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:bg-purple-800/50 transition-all duration-300 hover:-translate-y-1"
          >
            <Github className="w-8 h-8 text-yellow-400" />
            <span className="font-bold">Github</span>
          </a>
        </StaggerContainer>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900/50 backdrop-blur-sm py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                <span className="text-purple-900 font-bold text-xl">D</span>
              </div>
              <span className="font-bold text-xl">DogeMoon</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">
                Terms
              </a>
              <a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">
                Docs
              </a>
              <a href="#" className="text-purple-200 hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-purple-700 mt-8 pt-8 text-center text-purple-200">
            <p>© 2025 DogeMoon. All rights reserved.</p>
            <p className="mt-2 text-sm">Not financial advice. DYOR. To the moon! 🚀</p>
          </div>
        </div>
      </footer>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes width-animation {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-width {
          animation: width-animation 1.5s ease-out forwards;
          --target-width: attr(style width);
        }
      `}</style>
    </div>
  )
}

