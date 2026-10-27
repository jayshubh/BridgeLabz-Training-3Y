const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = false;
const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && (isOwnerInside || !isOwnerInside);

console.log(isSecure ? "Secure" : "Unsafe");
console.log("Owner is inside:", isOwnerInside);
