const arr = ['services', 'food', 'elections', 'events', 'auto', 'tools'];

const categories = new Set(arr);

const nums1 = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 44, 5, 6];
const nums2 = [1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 0, 0];

const unique = [...new Set([...nums1, ...nums2])];


