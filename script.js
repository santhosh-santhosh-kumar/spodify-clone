
    const col=document.createElement('div')
    col.setAttribute('class','col-mb-5')
    col.innerHTML=`
    <div class="card" style="width: 18rem; background: rgba(128, 128, 128, 0.103) !important;">
            <img src="..." class="card-img-top" alt="image">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">content.</p>
        </div>
     </div>    
    </div>
`
var row=document.getElementById('row')
row.append(col)
