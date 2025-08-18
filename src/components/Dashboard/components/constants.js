export const sidebarMenu = [
  {
    title: "Home",
    icon: "home",
    link: "/",
  },
  {
    title: "Dashboard",
    icon: "layout",
    link: "/dashboard",
  },
  {
    title: "Store",
    icon: "store",
    children: [
      { title: "Product", link: "/product" },
      { title: "Add Product", link: "/add-product" },
    ],
  },
  {
    title: "Analytic",
    icon: "bar",
    children: [
      { title: "Traffic", link: "/traffic" },
      { title: "Earning", link: "/earning" },
    ],
  },
  {
    title: "Finances",
    icon: "credit",
    children: [
      { title: "Payment", link: "/payment" },
      { title: "Payout", link: "/payout" },
    ],
  },
  {
    title: "Account Setting",
    icon: "settings",
    children: [
      { title: "My Profile", link: "/profile" },
      { title: "Security", link: "/security" },
    ],
  },
  {
    title: "Help And Support",
    icon: "help",
    link: "/support",
  },
];
