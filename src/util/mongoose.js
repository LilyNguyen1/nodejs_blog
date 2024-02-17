module.exports = {
    multipleMongooseToObject: function(mongooseArrays) {
        return mongooseArrays.map(mongooseArray => mongooseArray.toObject()) 
        //case 1
        //This ở đây là mỗi một document trong mongo, trong model của mongo sẽ trả lại cũng là 1 object nhưng là object constructor(mỗi object chính là document) này được khởi tạo từ object constructor, no có nhiều function, Prototol phức tạp hơn, mà mỗi name, desc không phải là con cấp 1 của this, vậy nên không thể chọc trực tiếp vào được.
        // còn object literal là 1 object đơn giản
        // vì version handlebar cũ bị lôi bảo mật, từ version 4.6 trở lên thì courses không thể chọc vào bằng cách courses.image or courses.name được, mà ta phải xử lý nó bằng cách map courses, sau khi lọc thì lúc này courses là 1 mảng gồm có course là 1 object constructor được tạo nên từ object constructor của mongo, trong mongo có hàm toObject() có nhiệm vụ chuyển object constructor thành object bình thường là literal, lúc này mới có thể chọc vào được.
        //final: vì mỗi lần render ra home thì lại phải map qua, nên ta sẽ tách ra file mongoose.js để xử lý 2 cases.
    },
    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose; 
        //case 2
    }
}

//

//2 cases:
//1: khi render ra 1 list các khoá học thì ta sẽ map qua, render ra all documents.
//2: khi vào 1 khoá học cụ thể thì chỉ render ra details của 1 khoá học đó, chính là 1 document