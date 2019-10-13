import { LaunchLinks } from "./LaunchLinks";
import { Rocket } from "./Rocket";

export interface LaunchDetails {
    id: number;
    mission_name: string;
    details: string;
    links: LaunchLinks;
    rocket: Rocket;
    launch_date_utc: string;
}