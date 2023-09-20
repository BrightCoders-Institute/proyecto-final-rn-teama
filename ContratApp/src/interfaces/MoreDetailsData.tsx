import { UserData } from './UserData';
import { JobData } from './JobData';

export interface MoreDetailsData {
  key: string;
  params: UserData;
}
export interface JobDetailsData {
  key: string;
  params: JobData;
}
