const globalVar = 'global';

if (globalVar) {
  const ifVar1 = 1;

  console.log(ifVar1);
  console.log(globalVar);

  if (globalVar) {
    const ifVar2 = 'Test';

    console.log(ifVar1);
    console.log(ifVar2);
    console.log(globalVar);
  }

  // console.log(ifVar2); // error
}
// console.log(ifVar2); // error

// console.log(ifVar);
console.log('end of script');
