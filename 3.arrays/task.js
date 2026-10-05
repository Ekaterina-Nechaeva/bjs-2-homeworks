// Задача 1

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((item, index) => item === arr2[index]);
}

// Задача 2

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(item => item.gender === gender);
    if (filteredUsers.length === 0) {
        return 0;
    }
    return filteredUsers
        .map((item) => item.age)
        .reduce((acc, item) => acc + item, 0) / filteredUsers.length;

}