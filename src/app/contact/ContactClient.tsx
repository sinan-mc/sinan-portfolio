"use client";

import { m, LazyMotion, domAnimation, Variants } from "framer-motion";
import Link from "next/link";
import { Phone, Instagram, Linkedin, Facebook, Twitter, Mail, MapPin, Send, Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import GoogleMap from "@/components/ui/GoogleMap";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ContactClient() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name")?.toString().trim(),
            email: formData.get("email")?.toString().trim(),
            phone: formData.get("phone")?.toString().trim(),
            service: formData.get("service")?.toString(),
            message: formData.get("message")?.toString().trim(),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            toast.success("Message sent successfully!", {
                style: {
                    background: '#111',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.1)',
                },
                iconTheme: {
                    primary: '#FFD700',
                    secondary: '#000',
                },
            });
            form.reset();
            setIsSuccess(true);
        } catch (error: unknown) {
            console.error("Error sending message: ", error);
            const errorMessage = error instanceof Error ? error.message : "Failed to send message.";
            toast.error(errorMessage, {
                style: {
                    background: '#111',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.1)',
                }
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const contactMethods = [
        {
            icon: <MessageCircle className="w-8 h-8 text-[#FFD700]" />,
            title: "WhatsApp",
            description: "Chat with me directly",
            action: "Message Now",
            link: "https://wa.me/917510477475"
        },
        {
            icon: <Phone className="w-8 h-8 text-[#FFD700]" />,
            title: "Phone",
            description: "Call for any inquiries",
            action: "+91 75104 77475",
            link: "tel:+917510477475"
        },
        {
            icon: <Mail className="w-8 h-8 text-[#FFD700]" />,
            title: "Email",
            description: "Send me an email",
            action: "sinanmc46@gmail.com",
            link: "mailto:sinanmc46@gmail.com"
        },
        {
            icon: <MapPin className="w-8 h-8 text-[#FFD700]" />,
            title: "Location",
            description: "Visit my office",
            action: "Malappuram, Kerala",
            link: "#map-section"
        }
    ];

    return (
        <LazyMotion features={domAnimation}>
            <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFD700] selection:text-black font-sans overflow-x-hidden relative">
                <Toaster position="top-center" reverseOrder={false} />
                {/* Animated Background Mesh & Grid */}
                <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#FFD700]/10 blur-[120px] mix-blend-screen" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#FFD700]/5 blur-[150px] mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
                    {/* SECTION 1 - HERO & INFO */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <m.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            <m.div variants={fadeInUp} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#141414] border border-white/10 w-fit mx-auto">
                                <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                                <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Available for work</span>
                            </m.div>

                            <m.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                                Let&apos;s Work <span className="text-[#FFD700]">Together</span>
                            </m.h1>

                            <m.p variants={fadeInUp} className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mx-auto px-2">
                                Have a project in mind? Reach out through any of the channels below. I&apos;m always open to discussing web development, SEO, and digital marketing opportunities.
                            </m.p>
                        </m.div>
                    </div>

                    <m.div
                        id="contact-form"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="max-w-3xl mx-auto mb-20 md:mb-32 relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700]/30 via-yellow-600/20 to-[#FFD700]/30 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        {isSuccess ? (
                            <div className="relative bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/5 p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2rem] shadow-2xl flex flex-col items-center justify-center text-center min-h-[400px]">
                                <m.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, type: "spring" }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 mb-6 bg-[#FFD700]/10 rounded-full flex items-center justify-center border border-[#FFD700]/20">
                                        <CheckCircle2 className="w-10 h-10 text-[#FFD700]" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
                                    <p className="text-white/70 mb-8 max-w-md text-lg">
                                        Your message has been sent successfully. I will contact you soon.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-black bg-[#FFD700] rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(255,215,0,0.5)] transform hover:-translate-y-1"
                                    >
                                        Send another message
                                    </button>
                                </m.div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/5 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] shadow-2xl space-y-6">
                                <div className="text-center mb-6 sm:mb-8">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">Send a Message</h2>
                                    <p className="text-sm sm:text-base text-white/60">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            autoComplete="name"
                                            placeholder="John Doe"
                                            className="w-full bg-[#111] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-[#111] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-white/80 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            autoComplete="tel"
                                            placeholder="+91 00000 00000"
                                            className="w-full bg-[#111] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="service" className="text-sm font-medium text-white/80 ml-1">Interested Service</label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                name="service"
                                                className="w-full bg-[#111] border border-white/5 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20 transition-all duration-300"
                                                defaultValue=""
                                                required
                                            >
                                                <option value="" disabled>Select a service</option>
                                                <option value="Website Development">Website Development</option>
                                                <option value="SEO">SEO (Search Engine Optimization)</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="AI Automation">AI Automation</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white/50">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/80 ml-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me about your project or goals..."
                                        className="w-full bg-[#111] border border-white/5 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:ring-2 focus:ring-[#FFD700]/20 transition-all duration-300 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-[#FFD700] rounded-xl hover:bg-yellow-400 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:-translate-y-0 transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(255,215,0,0.5)]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            Sending...
                                            <Loader2 className="ml-2 w-5 h-5 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="ml-2 w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </m.div>

                    {/* CONTACT METHODS GRID */}
                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-6xl mx-auto"
                    >
                        {contactMethods.map((method) => (
                            <m.div key={method.title} variants={fadeInUp} className="h-full">
                                <Link
                                    href={method.link}
                                    target={method.link.startsWith("http") ? "_blank" : undefined}
                                    className="relative flex flex-col items-center justify-center p-8 bg-[#111]/80 backdrop-blur-md border border-white/5 rounded-3xl hover:bg-[#1A1A1A] hover:border-[#FFD700]/40 hover:-translate-y-2 transition-all duration-500 group h-full text-center overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative p-5 bg-[#141414] border border-white/10 rounded-full mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_20px_rgba(255,215,0,0.05)] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                                        {method.icon}
                                    </div>
                                    <h3 className="relative text-xl font-bold text-white mb-2">{method.title}</h3>
                                    <p className="relative text-white/60 text-sm mb-4 flex-grow">{method.description}</p>
                                    <span className={method.title === "Location" ? "relative text-white/80 font-semibold text-sm group-hover:text-white transition-colors" : "relative text-[#FFD700] font-semibold text-sm group-hover:text-yellow-400 transition-colors"}>{method.action}</span>
                                </Link>
                            </m.div>
                        ))}
                    </m.div>

                    {/* SECTION 3 - LOCATION MAP */}
                    <m.div
                        id="map-section"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="max-w-5xl mx-auto mb-24"
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-4 text-white">
                                Find Me Here
                            </h2>
                            <p className="text-white/60 text-lg">Malappuram, Kerala, India</p>
                        </div>

                        <GoogleMap />
                    </m.div>

                    {/* SECTION 4 - SOCIAL MEDIA */}
                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="text-center mb-24"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Connect With Me</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link href="https://www.instagram.com/sinan_mc_malappuram?igsh=Mzl5MGFhem1mY2g1" target="_blank" className="w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-white/70 hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10 transition-all duration-300 hover:scale-110">
                                <Instagram className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="https://www.linkedin.com/in/mhd-sinan-mc" target="_blank" className="w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-white/70 hover:text-[#0077B5] hover:border-[#0077B5] hover:bg-[#0077B5]/10 transition-all duration-300 hover:scale-110">
                                <Linkedin className="w-6 h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://www.facebook.com/share/1KaYZRrGny/" target="_blank" className="w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-white/70 hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-300 hover:scale-110">
                                <Facebook className="w-6 h-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://x.com/mc_sinan3229" target="_blank" className="w-14 h-14 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
                                <Twitter className="w-6 h-6" />
                                <span className="sr-only">X (Twitter)</span>
                            </Link>
                        </div>
                    </m.div>

                    {/* SECTION 5 - CTA */}
                    <m.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 p-10 md:p-16 text-center"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                                Ready to Elevate Your <br className="hidden sm:block" />
                                <span className="text-[#FFD700]">Digital Presence?</span>
                            </h2>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 sm:pt-4">
                                <Link href="https://wa.me/917510477475" target="_blank" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-[#FFD700] rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                                    <MessageCircle className="mr-2 w-5 h-5" />
                                    WhatsApp Now
                                </Link>
                                <Link href="tel:+917510477475" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-white/20 rounded-full hover:border-[#FFD700] hover:text-[#FFD700] transition-all duration-300">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Call Now
                                </Link>
                            </div>
                        </div>
                    </m.div>

                </div>
            </div>
        </LazyMotion>
    );
}
