import { categories } from "@/lib/data/CategoryData";

export async function GET() {
    // const categories = [
    //     {
    //         name: "New Arrivals",
    //         icon: "📦",
    //         // subCategories: [
    //         //     { name: "Trending", icon: "🔥" },
    //         //     { name: "Best Sellers", icon: "🏆" },
    //         //     { name: "Just Launched", icon: "🚀" },
    //         // ],
    //     },
    //     {
    //         name: "Electronics",
    //         icon: "💻",
    //         subCategories: [
    //             { name: "Home Appliances", icon: "🏠" },
    //             { name: "Wearable Tech", icon: "⌚" },
    //             { name: "Gaming Consoles", icon: "🎮" },
    //         ],
    //     },
    //     {
    //         name: "Gifts",
    //         icon: "🎁",
    //         subCategories: [
    //             { name: "Birthday Gifts", icon: "🎂" },
    //             { name: "Anniversary Gifts", icon: "💍" },
    //             { name: "Holiday Specials", icon: "❄️" },
    //         ],
    //     },
    //     {
    //         name: "Computers",
    //         icon: "🖥️",
    //         subCategories: [
    //             { name: "Laptops", icon: "💼" },
    //             { name: "Desktops", icon: "🖥️" },
    //             { name: "Monitors", icon: "📺" },
    //             { name: "Processors", icon: "⚙️" },
    //         ],
    //     },
    //     {
    //         name: "Smartphones & Tablets",
    //         icon: "📱",
    //         subCategories: [
    //             { name: "Android Phones", icon: "🤖" },
    //             { name: "iPhones", icon: "🍏" },
    //             { name: "Tablets", icon: "📖" },
    //             { name: "Smartwatches", icon: "⌚" },
    //         ],
    //     },
    //     {
    //         name: "TV, Video & Music",
    //         icon: "📺",
    //         subCategories: [
    //             { name: "Smart TVs", icon: "📡" },
    //             { name: "Home Theaters", icon: "🎼" },
    //             { name: "Headphones", icon: "🎧" },
    //             { name: "Soundbars", icon: "🔊" },
    //         ],
    //     },
    //     {
    //         name: "Cameras",
    //         icon: "📷",
    //         subCategories: [
    //             { name: "DSLR", icon: "📸" },
    //             { name: "Mirrorless", icon: "📷" },
    //             { name: "Action Cameras", icon: "🎥" },
    //             { name: "Camera Accessories", icon: "🎞️" },
    //         ],
    //     },
    //     {
    //         name: "Cooking",
    //         icon: "🍳",
    //         subCategories: [
    //             { name: "Cookware", icon: "🍲" },
    //             { name: "Small Appliances", icon: "🍕" },
    //             { name: "Baking Essentials", icon: "🎂" },
    //         ],
    //     },
    //     {
    //         name: "Accessories",
    //         icon: "🎒",
    //         subCategories: [
    //             { name: "Bags", icon: "👜" },
    //             { name: "Watches", icon: "⌚" },
    //             { name: "Jewelry", icon: "💎" },
    //             { name: "Belts", icon: "🛍️" },
    //         ],
    //     },
    //     {
    //         name: "Sports",
    //         icon: "⚽",
    //         subCategories: [
    //             { name: "Fitness Equipment", icon: "🏋️" },
    //             { name: "Outdoor Gear", icon: "🎿" },
    //             { name: "Team Sports", icon: "🏀" },
    //         ],
    //     },
    //     {
    //         name: "Electronic Gadgets",
    //         icon: "🎧",
    //         subCategories: [
    //             { name: "Drones", icon: "🚁" },
    //             { name: "Power Banks", icon: "🔋" },
    //             { name: "VR Devices", icon: "🕶️" },
    //             { name: "Chargers", icon: "🔌" },
    //         ],
    //     },
    // ];

    return Response.json(categories);
}
