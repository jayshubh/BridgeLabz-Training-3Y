const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;
const isSecure =
  isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside &&
  (isOwnerInside || !isAlarmOn);

console.log(isSecure ? "Secure" : "Unsafe");
console.log("Owner is inside:", isOwnerInside);
