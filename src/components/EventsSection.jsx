import { useState } from "react";
import { cn } from "@/lib/utils";

// Hàm định dạng ngày kiểu dd/mm/yyyy
const formatDate = (date) =>
    date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });

// Hàm cộng ngày
const addDays = (dateStr, days) => {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return date;
};


// Dữ liệu sử dụng ngày thật
const events = [
    { name: "Event 1", duration: 20, dayStart: "2025-01-01", category: "This Month" },
    { name: "Event 2", duration: 15, dayStart: "2025-01-25", category: "This Month" },
    { name: "Event 3", duration: 10, dayStart: "2025-02-10", category: "This Month" },
    { name: "Event 4", duration: 25, dayStart: "2025-02-25", category: "This Month" },
    { name: "Event 5", duration: 10, dayStart: "2025-03-10", category: "This Month" },
    { name: "Event 6", duration: 20, dayStart: "2025-03-25", category: "This Month" },

    { name: "Event 7", duration: 80, dayStart: "2025-01-10", category: "This Year" },
    { name: "Event 8", duration: 75, dayStart: "2025-04-01", category: "This Year" },
    { name: "Event 9", duration: 70, dayStart: "2025-06-10", category: "This Year" },
    { name: "Event 10", duration: 65, dayStart: "2025-08-01", category: "This Year" },
    { name: "Event 11", duration: 60, dayStart: "2025-10-01", category: "This Year" },

    { name: "Event 12", duration: 90, dayStart: "2024-01-10", category: "Last Year" },
    { name: "Event 13", duration: 70, dayStart: "2024-05-15", category: "Last Year" },
    { name: "Event 14", duration: 85, dayStart: "2024-08-01", category: "Last Year" },
    { name: "Event 15", duration: 95, dayStart: "2024-10-15", category: "Last Year" },
];

const categories = ["all", "This Month", "This Year", "Last Year"];

export const EventsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredEvents = events.filter((event) => {
        if (activeCategory === "all") return true;
        if (activeCategory === "This Year") return event.category === "This Year" || event.category === "This Month";
        return event.category === activeCategory;
    });

    return (
        <section id="event" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Our <span className="text-primary"> Events</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event, key) => {
                        const startDate = new Date(event.dayStart);
                        const endDate = addDays(event.dayStart, event.duration);
                        return (
                            <div
                                key={key}
                                className="bg-card p-6 rounded-lg shadow-xs card-hover"
                            >
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">{event.name}</h3>
                                </div>

                                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                                    <span>{formatDate(startDate)}</span>
                                    <span>{formatDate(endDate)}</span>
                                </div>

                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                        style={{ width: `${event.duration}%` }}
                                    />
                                </div>

                                <div className="text-right mt-1">
                                    <span className="text-sm text-muted-foreground">
                                        {event.duration} days
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
