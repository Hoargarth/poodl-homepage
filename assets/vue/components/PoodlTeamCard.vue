<template>
    <div class="poodl-team-card">
        <span class="team-card-name">{{ name }}</span>
        <span class="team-card-position">{{ position }}</span>
        <poodl-image :src="image" :alt="name" maxWidth="80%" />
        <p class="team-card-comment">{{ comment }}</p>
        <div class="team-card-contacts">
            <a v-for="(social, index) in contacts" :key="index"
                :class="social.type"
                :href="url(social)"
                target="_blank">
                {{ contactHandle(social) }}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PoodlTeamCard',
        props: {
            name: {
                default: 'PoodlToken',
                type: String,
            },
            image: {
                default: '/team/default.png',
                type: String,
            },
            position: {
                default: 'Admin',
                type: String,
            },
            comment: {
                default: 'Buy some Poodl and join our family :)',
                type: String,
            },
            contacts: {
                default: [
                    {type: 'twitter', handle: 'poodletoken'},
                    {type: 'telegram', handle: 'poodl'},
                    {type: 'discord', handle: 'SomeHandle#3212', id: '940738389450321950'},
                ],
                type: Array,
            },
        },
        data: () => ({
        }),
        methods: {
            contactHandle(social) {
                switch (social.type) {
                    case 'twitter':
                    case 'telegram':
                        return '@' + social.handle;
                    default:
                        return social.handle;
                }
            },
            url(social) {
                switch (social.type) {
                    case 'twitter':
                        return 'https://twitter.com/' + social.handle;
                    case 'telegram':
                        return 'https://t.me/' + social.handle;
                    case 'discord':
                        return 'https://discordapp.com/users/' + social.id;
                    default:
                        return '#';
                }
            },
        },
    }
</script>