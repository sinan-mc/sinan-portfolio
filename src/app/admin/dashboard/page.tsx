"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, Timestamp, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Loader2, Users, MessageSquare, Calendar, Mail, Phone, Briefcase, Trash2 } from "lucide-react";

// Types
type Contact = {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    status: string;
    source: string;
    createdAt: Timestamp;
};

type ChatLead = {
    id: string;
    name: string;
    email?: string;
    phone: string;
    service: string;
    status: string;
    source: string;
    createdAt: Timestamp;
};

export default function AdminDashboard() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [chatLeads, setChatLeads] = useState<ChatLead[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"contacts" | "chat">("contacts");

    const handleDelete = async (collectionName: "contacts" | "chat_leads", documentId: string) => {
        if (window.confirm('Are you sure you want to delete this lead?')) {
            try {
                await deleteDoc(doc(db, collectionName, documentId));
                if (collectionName === "contacts") {
                    setContacts(prev => prev.filter(c => c.id !== documentId));
                } else {
                    setChatLeads(prev => prev.filter(c => c.id !== documentId));
                }
            } catch (error) {
                console.error("Error deleting document:", error);
                alert("Failed to delete lead. Please try again.");
            }
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch Contacts
                const contactsQuery = query(collection(db, "contacts"), orderBy("createdAt", "desc"));
                const contactsSnapshot = await getDocs(contactsQuery);
                const contactsData = contactsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Contact[];

                // Fetch Chat Leads
                const chatLeadsQuery = query(collection(db, "chat_leads"), orderBy("createdAt", "desc"));
                const chatLeadsSnapshot = await getDocs(chatLeadsQuery);
                const chatLeadsData = chatLeadsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as ChatLead[];

                setContacts(contactsData);
                setChatLeads(chatLeadsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const formatDate = (timestamp: Timestamp) => {
        if (!timestamp) return "N/A";
        const date = timestamp.toDate();
        return new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }).format(date);
    };

    if (loading) {
        return (
            <div className="flex h-[calc(100vh-73px)] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    const displayData = activeTab === "contacts" ? contacts : chatLeads;

    return (
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-dark-100 p-5 sm:p-6 rounded-2xl shadow-sm border border-dark-200 flex items-center gap-4">
                    <div className="p-3 sm:p-4 bg-primary/10 text-primary rounded-xl">
                        <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm font-medium text-gray-400">Contact Form Submissions</p>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{contacts.length}</h3>
                    </div>
                </div>
                <div className="bg-dark-100 p-5 sm:p-6 rounded-2xl shadow-sm border border-dark-200 flex items-center gap-4">
                    <div className="p-3 sm:p-4 bg-accent/10 text-accent rounded-xl">
                        <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm font-medium text-gray-400">Chatbot Leads</p>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{chatLeads.length}</h3>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 sm:space-x-6 mb-4 sm:mb-6 border-b border-dark-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <button
                    onClick={() => setActiveTab("contacts")}
                    className={`flex-shrink-0 pb-3 sm:pb-4 px-2 text-sm font-medium transition-colors relative ${activeTab === "contacts" ? "text-primary" : "text-gray-400 hover:text-white"
                        }`}
                >
                    Contact Submissions
                    {activeTab === "contacts" && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("chat")}
                    className={`flex-shrink-0 pb-3 sm:pb-4 px-2 text-sm font-medium transition-colors relative ${activeTab === "chat" ? "text-accent" : "text-gray-400 hover:text-white"
                        }`}
                >
                    Chatbot Leads
                    {activeTab === "chat" && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-t-full" />
                    )}
                </button>
            </div>

            {/* Data Container */}
            <div className="bg-dark-100 rounded-xl sm:rounded-2xl shadow-sm border border-dark-200 overflow-hidden">
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-dark-200/50 text-gray-400 font-medium border-b border-dark-200">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Contact Details</th>
                                <th className="px-6 py-4">Service</th>
                                {activeTab === "contacts" && <th className="px-6 py-4">Message</th>}
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-dark-200">
                            {displayData.map((item) => (
                                <tr key={item.id} className="hover:bg-dark-200/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-white">{item.name}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1 text-gray-300">
                                            {item.email && (
                                                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-gray-400" />{item.email}</span>
                                            )}
                                            {item.phone && (
                                                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-gray-400" />{item.phone}</span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-200 text-gray-300 text-xs font-medium">
                                            <Briefcase className="w-3.5 h-3.5" />
                                            {item.service}
                                        </span>
                                    </td>
                                    {activeTab === "contacts" && (
                                        <td className="px-6 py-4 max-w-xs truncate text-gray-300" title={(item as Contact).message}>
                                            {(item as Contact).message}
                                        </td>
                                    )}
                                    <td className="px-6 py-4 text-gray-400 whitespace-nowrap">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {formatDate(item.createdAt)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize">
                                            {item.status || "new"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleDelete(activeTab === "contacts" ? "contacts" : "chat_leads", item.id)}
                                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                            title="Delete Lead"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {displayData.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-6 py-12 text-center text-gray-400">
                                        No {activeTab === "contacts" ? "contact submissions" : "chatbot leads"} found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden flex flex-col divide-y divide-dark-200">
                    {displayData.map((item) => (
                        <div key={item.id} className="p-4 space-y-3 hover:bg-dark-200/30 transition-colors">
                            <div className="flex justify-between items-start gap-2">
                                <div>
                                    <h4 className="font-medium text-white text-base">{item.name}</h4>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {formatDate(item.createdAt)}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize flex-shrink-0">
                                        {item.status || "new"}
                                    </span>
                                    <button
                                        onClick={() => handleDelete(activeTab === "contacts" ? "contacts" : "chat_leads", item.id)}
                                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors flex-shrink-0"
                                        title="Delete Lead"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-1.5 pt-1">
                                {item.email && (
                                    <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white w-fit">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        {item.email}
                                    </a>
                                )}
                                {item.phone && (
                                    <a href={`tel:${item.phone}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white w-fit">
                                        <Phone className="w-4 h-4 text-gray-400" />
                                        {item.phone}
                                    </a>
                                )}
                            </div>

                            <div className="pt-2">
                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-dark-200 text-gray-300 text-xs font-medium">
                                    <Briefcase className="w-3.5 h-3.5" />
                                    {item.service}
                                </span>
                            </div>

                            {activeTab === "contacts" && (item as Contact).message && (
                                <div className="pt-2">
                                    <p className="text-sm text-gray-400 bg-dark-200/50 p-3 rounded-lg">
                                        {(item as Contact).message}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                    {displayData.length === 0 && (
                        <div className="px-4 py-8 text-center text-gray-400 text-sm">
                            No {activeTab === "contacts" ? "contact submissions" : "chatbot leads"} found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
