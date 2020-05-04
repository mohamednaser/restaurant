export default function () {
  return `   
  <p class="h1 m-auto text-center contact-us"> Contact Us </p>
  <div id="contact-form">

     <form>
    <div class="form-group">
      <label for="exampleInputEmail1" class="white-color">Name</label>
      <input type="text" class="form-control" placeholder="enter yourname" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="white-color">Email</label>
      <input type="email" class="form-control" placeholder="enter your email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="white-color">Message</label>
      <textarea class="form-control" placeholder="Write Your Message Here" required></textarea>
      </div>
    <button type="submit" class="btn btn-primary">Send</button>
  </form>
   </di>
  `;
}
