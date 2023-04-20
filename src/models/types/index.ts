export interface IEvent {
  id: string;
  type: string;
  actor: IUser;
  repo: IRepo;
  payload: ICommitPayload | ICreateEventPayload | IDeleteEventPayload;
  public: boolean;
  created_at: string;
  org?: IOrg;
}

export interface IUser {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface IRepo {
  id: number;
  name: string;
  url: string;
}

export interface ICommitPayload {
  repository_id: number;
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: ICommit[];
}

export interface ICommit {
  sha: string;
  author: IAuthor;
  message: string;
  distinct: boolean;
  url: string;
}

export interface IAuthor {
  email: string;
  name: string;
}

export type EventsQueries = {
  perPage: number;
  page: number;
};

export interface IOrg {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface ICommit {
  sha: string;
  author: IAuthor;
  message: string;
  distinct: boolean;
  url: string;
}

export interface ICreateEventPayload {
  ref: string;
  ref_type: string;
  master_branch: string;
  description: any;
  pusher_type: string;
}

export interface IDeleteEventPayload {
  ref: string;
  ref_type: string;
  pusher_type: string;
}
