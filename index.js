const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect('mongodb://localhost/playground');
        console.log('Connected Successfully');
    } catch (error) {
        console.error('Could not connect', error);
        return;
    }

    const courseSchema = new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: { type: Date, default: Date.now },
        isPublished: Boolean
    });

    const Course = mongoose.model('Course', courseSchema);

    async function createCourse() {
        const course = new Course({
            name: 'Reactjs',
            author: 'Lyes',
            tags: ['React', 'JavaScript'],
            isPublished: true
        });

        const result = await course.save();
        console.log(result);
    }

    async function getCourses() {
        const courses = await Course.find();
        console.log(courses);
    }


    await getCourses();
}

main();
