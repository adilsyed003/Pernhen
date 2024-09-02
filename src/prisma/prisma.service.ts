import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

//dotenv.config()


@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
        super({
            datasources:{
                db:{
                    url:"mongodb+srv://Pernhen_Admin1:ownerpern19915@cluster0.k5rcx.mongodb.net/pernhen?retryWrites=true&w=majority"
                }
            }
        })
    }
}
