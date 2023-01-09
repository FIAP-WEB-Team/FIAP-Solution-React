import './Banner.css';

function Banner() {
    return (
        <div class="steps clearfix"><ul role="tablist"><li role="tab" class="first current" aria-disabled="false" aria-selected="true"><a id="signup-form-t-0" href="#signup-form-h-0" aria-controls="signup-form-p-0"><span class="current-info audible"> </span><div class="title"><span class="number">1</span>
                    <span class="title_text">Account Infomation</span>
                </div></a></li><li role="tab" class="disabled" aria-disabled="true"><a id="signup-form-t-1" href="#signup-form-h-1" aria-controls="signup-form-p-1"><div class="title"><span class="number">2</span>
                    <span class="title_text">Personal Information</span>
                </div></a></li><li role="tab" class="disabled last" aria-disabled="true"><a id="signup-form-t-2" href="#signup-form-h-2" aria-controls="signup-form-p-2"><div class="title"><span class="number">3</span>
                    <span class="title_text">Payment Details</span>
                </div></a></li></ul></div>
        // <header className="banner">
        //     <img src="/images/gol_logo.png" alt="Principal banner of page"/>
        // </header>
    )
}

export default Banner;