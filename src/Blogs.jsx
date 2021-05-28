import React, { Component } from 'react';
import Header from '../src/header'
import { useState } from 'react';
import { useEffect } from 'react';
import Iframe from 'react-iframe'

const Blogs = (props) => {
    const [header, setheader] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll())
    })
    const listenToScroll = () => {
        var theposition = window.pageYOffset
        console.log("value of scroll===>" + theposition);
        if (theposition >= 480) {
            console.log("in scroll 23");

            setheader(true)
        }
        else {
            setheader(false)
        }

    }
    return (
        <div>
            <div className='blogImage' >

            </div>
            <Header visible={header} props={props} />
            <div>
                <div className='aboutDiv'>
                    Blogs
                </div>
                Setting a check-in time is something all hosts have to do. When you think about it, there are a few things you have to take into consideration which allow you as a host to balance both our private life with a  good experience for your guest.



Perhaps you base your check-in timings around when you are able to meet your guests, or when you think your home will be ready if you had an earlier check-out, or even what you think will be most attractive to your guests.
I work from home, but am quite busy, plus of course, like any other host, I have guest turnovers to think about. I need some structure to my working day, otherwise life would be chaos. So, I tried to base my check in/out times similarly to hotels.



Intially, I had a check out of 12pm and check in of 3pm, which is what I find to be the norm at most European hotels (I stay in a lot of those for work) but found that this was sometimes a bit too tight as not all guests leave on time, so I changed the check out to 11am, which is more in line with UK hotels (some of those have check out as early as 10am).



This more or less works for me, but the other thing is that I rarely let guests do early bag drop offs anymore because, unfortunately, I got messed around a lot by a few guests over this, e.g. they said they would just drop off their bags but then insisted on checking in, using the bedroom, the bathrooms etc. while I was in the middle of cleaning them and then rated me down on cleanliness! (I started a whole separate thread about that dilemma).



Whilst I would like to be more flexible, unfortunately, some guests have kind of ruined it for the more respectful ones (and you don't always know which kind of guest you're going to get). So, I find it's better to stick to your workable perimeters (SIC?) rather than go prematurely grey.

components. LiveData is an observable data holder. This allows the components in your app to be able to observe LiveData objects for changes without creating explicit and rigid dependency paths between them. This decouples completely the LiveData object producer from the LiveData object consumer.
Adding to this, there is also a great benefit in LiveData, LiveData respects the lifecycle state of your app components (activities, fragments, services) and handles object life cycle management which ensures that LiveData objects do not leak.
As per Google Docs, If you are already using a library like Rx or Agera, you can continue using them instead of LiveData. But in this case, it is your responsibility to handle object allocation and de-allocation per Android components life cycle.
Since LiveData respects Android Lifecycle, this means it will not invoke its observer callback unless the LiveData host (activity or fragment) is in an active state (received onStart() but did not receive onStop() for example). Adding to this, LiveData will also automatically remove the observer when the its host receives onDestroy().
LiveData will be illustrated in our MVVM sample app below.
ViewModel
ViewModel is also one of the newly introduced architecture components. Architecture components provide a new class called ViewModel, which is responsible for preparing the data for the UI/View.
ViewModel gives you a good base class for your MVVM ViewModel layer since ViewModel (and its children AndroidViewModel)’s extending classes are automatically having their holding data retained during configuration changes. This means that after configuration changes, this ViewModel holded data is immediately available to the next activity or fragment instance.
The following diagram shows the life cycle of ViewModel component.
        </div>
        < div className='footer' >
                    <div>

                    </div>
                    <div className='addressIframe'>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4299.5546616816455!2d72.9628860378745!3d19.167587908897474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8c957a40c4d8de9!2sNew%20PMGP%20CHS!5e0!3m2!1sen!2sin!4v1566839777046!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative" />
                    </div>
                </div >
        </div>
    )

}
export default Blogs