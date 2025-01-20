export interface IUserState {

    token: string;
    name: string;
    avatar: string;
    introduction: string;
    roles: string[];
    email: string;
    permissions: string[];
    userId: number;
    userName: string;
    area: string;
    birthDay: string;
    requiresTwoFactorAuthentication: boolean;
    twoFactorAuthenticationProviders: string[];
    rememberClientToken: string;
    lastActiveTime: Date;
    tenancyName: string;

}

import { defineStore } from 'pinia'


export const useUserModuleStore = defineStore('main', {
    state: (): IUserState => ({
        token: '',
        name: '',
        avatar: '',
        introduction: '',
        roles: [],
        email: '',
        permissions: [],
        userId: -1,
        userName: '',
        area: '',
        birthDay: '',
        requiresTwoFactorAuthentication: false,
        twoFactorAuthenticationProviders: [],
        rememberClientToken: '',
        tenancyName: '1',
        lastActiveTime: new Date(),
    }),
    actions: {



        SET_ID(id: number) {
            this.userId = id;
        }

        ,
        SET_REMEMBER_TOKEN(rememberClientToken: string) {
            this.rememberClientToken = rememberClientToken;
        }

        ,
        UPDATE_LASTACTIVETIME(lastActiveTime: Date) {
            this.lastActiveTime = lastActiveTime;
        }


        ,
        SET_2FA_PROVIDERS(twoFactorAuthenticationProviders: string[]) {
            this.twoFactorAuthenticationProviders = twoFactorAuthenticationProviders;
        }

        ,
        SET_REQUIRES_2FA(requiresTwoFactorAuthentication: boolean) {
            this.requiresTwoFactorAuthentication = requiresTwoFactorAuthentication;
        }

        ,
        SET_AREA(area: string) {
            this.area = area;
        }
        ,
        SET_BIRTHDAY(birthDay: string) {
            this.birthDay = birthDay;
        }
        ,
        SET_TOKEN(token: string) {
            this.token = token;
        }


        ,
        SET_NAME(name: string) {
            this.name = name;
        }

        ,
        SET_AVATAR(avatar: string) {
            this.avatar = avatar;
        }

        ,
        SET_INTRODUCTION(introduction: string) {
            this.introduction = introduction;
        }

        ,
        SET_ROLES(roles: string[]) {
            this.roles = roles;
        }
        ,
        SET_PERMISSIONS(permissions: string[]) {
            this.permissions = permissions;
        }
        ,
        SET_EMAIL(email: string) {
            this.email = email;
        }
        ,
        SET_USERNAME(userName: string) {
            this.userName = userName;
        }

        ,
        SET_TENANCYNAME(tenancyName: string) {
            this.tenancyName = tenancyName;
        },
    },
})

