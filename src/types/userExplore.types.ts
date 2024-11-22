import { PaginationType } from "./pagination.types";

export type UsuariosParaMostrarEnExplorar = {
    content:    Content[];
    pagination: PaginationType;
}

export type Content = {
    id:             string;
    name:           string;
    username:       string;
    photoUrl:       string;
    followersCount: number;
}


