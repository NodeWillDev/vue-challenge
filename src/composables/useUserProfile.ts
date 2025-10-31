import { useQuery } from "@tanstack/vue-query";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
}

const fetchUserProfile = async (): Promise<UserProfile> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    id: 1,
    name: "João Silva",
    email: "joao.silva@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    bio: "Desenvolvedor Full Stack apaixonado por Vue.js",
  };
};

export function useUserProfile() {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });
}
