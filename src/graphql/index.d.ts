interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    dob: Date;
    is_active: boolean;
    ip_address: string;
    last_page_visited: string;
    roles: Role[];
    permissions: Permission[];
}

interface Role {
    id: string;
    title: string;
    role_key: string;
}

interface Permission {
    id: string;
    name: string;
    slug: string;
    roles: Role[];
}

interface AuthPayload {
    access_token: string;
    expires_in: number;
}

interface LoginData {
    login: LoginResponse;
}

interface LoginResponse {
    tokens: AuthPayload;
    user: User;
}

interface BookResponse {
    book: BookData;
}

interface BookData {
    id: number;
    title: string;
    author: string;
}
