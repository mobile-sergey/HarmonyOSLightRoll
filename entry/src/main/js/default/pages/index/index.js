export default {
    data: {
        result: '?',
    },

    roll() {
        this.result = Math.floor(Math.random() * 5) + 1;
    },
}
