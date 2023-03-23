<!--Card - Contacts	-->
<div class="card-inner contacts" id="contacts-card">
    <div class="card-wrap">
        <!--	Conacts Info	-->
        <div class="content contacts">
            <!-- title -->
            <div class="title">Get in Touch</div>

            <!-- content -->
            <div class="row">
                <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
                    <div class="info-list">
                        <ul>
                            <li>
                                <strong>Address . . . . .</strong> Kolhapur MH,IN
                            </li>
                            <li>
                                <strong>Email . . . . .</strong> shdinde@gmail.com / info@shdinde.in
                            </li>
                            <li><strong>Phone . . . . .</strong> +91 8888 763 563</li>
                            <li><strong>To Help . . . . .</strong> Available</li>
                        </ul>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <!--	Contact Form	-->
        <div class="content contacts">
            <!-- title -->
            <div class="title">Contact Form</div>

            <!-- content -->
            <div class="row">
                <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
                    <div class="contact_form">
                        <form id="cform" method="post">
                            <div class="row">
                                <div class="col col-d-6 col-t-6 col-m-12">
                                    <div class="group-val">
                                        <input type="text" name="name" id="name" placeholder="Full Name" />
                                    </div>
                                </div>
                                <div class="col col-d-6 col-t-6 col-m-12">
                                    <div class="group-val">
                                        <input type="text" name="email" id="email" placeholder="Email Address" />
                                    </div>
                                </div>
                                <div class="col col-d-12 col-t-12 col-m-12">
                                    <div class="group-val">
                                        <textarea name="message" id="msg" placeholder="Your Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="align-left">
                                <a href="#" class="button" onclick="$('#cform').submit();">                                
                                    <span class="text">Send Message</span>
                                    <span class="arrow"></span>
                                </a>
                            </div>
                        </form>
                        <div class="alert-success" id="mailmsg">
                            <p>Thanks, your message is sent successfully.</p>
                        </div>
                        <div class="alert-danger" id="failmailmsg">
                            <p>Opps!, please send your message again!!!</p>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</div>