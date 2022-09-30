import { LoggerCredentials } from './../typings/index';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

/**
 * Create axios instance
 * @param options {AxiosRequestConfig}
 * @returns {AxiosInstance}
 */
export function createHttpClient(options: AxiosRequestConfig): AxiosInstance {
    return axios.create(options)
}

export function LoggerBot(this: any, credentials: LoggerCredentials): void {
    this.BOT_TOKEN = credentials.BOT_TOKEN
    this.CHAT_ID = credentials.CHAT_ID
}