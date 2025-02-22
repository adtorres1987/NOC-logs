import { CronJob } from 'cron';

type CrontIme = string | Date;
type OnTick = () => void;

export class CronService {

    static createJob( cronTime: CrontIme, onTick: OnTick ): CronJob {

        const job = new CronJob( cronTime, onTick );

        job.start();

        return job;
        
    }

}