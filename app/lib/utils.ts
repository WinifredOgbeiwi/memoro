import { History, LayoutDashboard, Trophy, Upload, UserPen } from "lucide-react";

export const IMAGES = {
  Google_Logo: "/google-logo.png",
  Blob_bg: "/blob-bg.PNG",
  email: "/email.png",
  Auth1: "/memoro_auth1.png",
  Auth2: "/memoro_auth2.png",
  Auth3: "/memoro_auth3.png",
  Logo: "/memoro_logo.png",
  Logo_White: "/memoro_logo_white.png",
  MotivationImage:"/memoro_dasboard1.png"
};

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  forgot_password: "/forgot-password",
  reset_password: "/reset-password",

  dashboard: "/dashboard",
  upload: "/upload",
  profile: "/profile",
  history: "/quizzes",
  leaderboard: "/leaderboard",

  feedback: "/feedback",
};

export const AuthSwiperData = [
  {
    id: 1,
    image: IMAGES.Auth1,
    title: "Studying shouldn't feel like punishment.",
    description:
      "Long PDF files. Endless slides. Confusing summaries. We turn that mess into meaningful questions — so you spend less time decoding, and more time mastering. ",
  },
  {
    id: 2,
    image: IMAGES.Auth2,
    title: "You don't need to study harder. You need to study smarter",
    description:
      "Whether it is notes, slides, or concepts, we help you turn what you already have into something you can interact with — questions, quizzes, and more. Retention starts here.",
  },
  {
    id: 3,
    image: IMAGES.Auth3,
    title: "Learning is a journey. Let's make it easier to stay on track.",
    description:
      "We help you stay organized, so you can focus on what matters most. With Memoro, you can track your progress, set goals, and stay motivated to achieve your learning objectives.",
  },
];

export const DashboardSidebar = [
  {
    id: 1,
    title: "Dashboard",
    icon: LayoutDashboard,
    route: ROUTES.dashboard,
  },
  {
    id: 2,
    title: "Upload",
    icon: Upload,
    route: ROUTES.upload,
  },
  {
    id: 3,
    title: "History",
    icon: History,
    route: ROUTES.history,
  },
  {
    id: 4,
    title: "Leaderboard",
    icon: Trophy,
    route: ROUTES.leaderboard,
  },
  {
    id: 5,
    title: "Profile",
    icon: UserPen,
    route: "/profile",
  },
];
