export type Project = {
    id: number;
    name: string;
};

export type User = {
    id: number;
    name: string;
}

export type HeaderProps = {
    projects: Project[];
    user: User;
    notificationsCount: number;
};