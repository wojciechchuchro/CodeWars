//Lot of junior developer can be stuck when they need to change the access permission to a file or a directory in an Unix-like operating systems.
// To do that they can use the chmod command and with some magic trick they can change the permissionof a file or a directory.
// For more information about the chmod command you can take a look at the wikipedia page.
// chmod provides two types of syntax that can be used for changing permissions.
// An absolute form using octal to denote which permissions bits are set e.g: 766.
// Your goal in this kata is to define the octal you need to use in order to set yout permission correctly.
// Here is the list of the permission you can set with the octal representation of this one.

// User
// read (4)
// write (2)
// execute (1)
// Group
// read (4)
// write (2)
// execute (1)
// Other
// read (4)
// write (2)
// execute (1)

// The method take a hash in argument this one can have a maximum of 3 keys (owner,group,other).
// Each key will have a 3 chars string to represent the permission, for example the string rw- say that the user want the permission read, write without the execute.
// If a key is missing set the permission to ---

// Note: chmod allow you to set some special flags too (setuid, setgid, sticky bit) but to keep some simplicity for this kata we will ignore this one.

//My solution

function chmodCalculator(perm) {
    let arr = [0,0,0]
    let string = '';
    if(perm.user) {
        if (perm.user.charAt(0) === 'r')
            arr[0] += 4
        if (perm.user.charAt(1) === 'w')
            arr[0] += 2
        if (perm.user.charAt(2) === 'x')
            arr[0]++;
    }
    if(perm.group) {
        if (perm.group.charAt(0) === 'r')
            arr[1] += 4
        if (perm.group.charAt(1) === 'w')
            arr[1] += 2
        if (perm.group.charAt(2) === 'x')
            arr[1]++;
    }
    if(perm.other) {
        if (perm.other.charAt(0) === 'r')
            arr[2] += 4
        if (perm.other.charAt(1) === 'w')
            arr[2] += 2
        if (perm.other.charAt(2) === 'x')
            arr[2]++;
    }
    for (let i = 0; i < arr.length; i++) {
        string += arr[i]
    }

    return string
}