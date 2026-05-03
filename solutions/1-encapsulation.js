// BEGIN
const getMutualFriends = (user1, user2) => {
    const user1_friends  = user1.getFriends();
    const user2_friends  = user2.getFriends();
    let common_friends = []
    for (let u1 of user1_friends) {
        for (let u2 of user2_friends) {
            if (u1.id === u2.id) common_friends.push(u1)
        }
    }
    return common_friends
}

export { getMutualFriends };
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});
