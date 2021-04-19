const deleteList = [
    'vk.com/css/al/common.',
    'vk.com/css/al/base.',
    'vk.com/css/al/ui_common.',
    'vk.com/css/al/im.',
    'vk.com/css/al/page.',
];

const headTags = document.head.children;

for (let i = 0; i < headTags.length; i++) {
    if (headTags[i].href !== undefined) {
        for (j in deleteList) {
            if (headTags[i].href.includes(deleteList[j])) {
                document.head.removeChild(headTags[i--]);
                break;
            }
        }
    }
}