import React from 'react'

const Qna14 = () => {
  return (
    <div>
        <dl>
            <dt className='borange'> what is Lazy loading ?</dt>
            <dd>Lazy loading is a programming technique used to defer the loading of non-essential resources or components until they are actually needed. This approach helps optimize performance, reduce bandwidth usage, and improve user experience.
            </dd>
            <dt>How Lazy Loading Works:
            </dt>
           <dd> 1. Identify non-essential resources or components.</dd>
         <dd> 2. Replace them with placeholders or loading indicators.</dd>
        <dd>  3. Load the actual resources or components only when:</dd>
             <dd> - The user interacts with them.</dd>
            <dd>  - They come into view (e.g., scrolling).</dd>
            <dd>  - A specific condition is met.</dd>
            <dt>Benefits of Lazy Loading:
            </dt>
           <dd> 1. Improved Performance: Reduced initial load time and faster rendering.</dd>
           <dd>  2. Bandwidth Savings: Less data transferred over the network.</dd>
           <dd>  3. Enhanced User Experience: Faster interaction and less waiting.</dd>
            <dd> 4. Better Resource Management: Reduced memory usage and CPU load.</dd>
            <dt>Common Use Cases:
            </dt>
          <dd>1. Images: Load images only when they come into view.</dd>
             <dd> 2. Videos: Load videos only when played.</dd>
            <dd>  3. Components: Load complex components only when needed.</dd>
             <dd> 4. Data: Load data in chunks, rather than all at once.</dd>
           <dd>   5. Infinite Scrolling: Load content as the user scrolls.</dd>
           <dt>Lazy Loading Techniques:
           </dt>
          <dd> 1. Prioritize Critical Content: Load essential content first.</dd>
           <dd> 2. Use Placeholders: Provide visual cues for loading content.</dd>
           <dd> 3. Optimize Image Sizes: Reduce image file sizes.</dd>
         <dd>   4. Monitor Performance: Analyze lazy loading impact.
         </dd>
         <dt>Best practice</dt>
      <dd>   1. Prioritize Critical Content: Load essential content first.</dd>
        <dd>2. Use Placeholders: Provide visual cues for loading content.</dd>
             <dd>3. Optimize Image Sizes: Reduce image file sizes.</dd>
              <dd>4. Monitor Performance: Analyze lazy loading impact.</dd>
              <dd>Lazy loading is a valuable technique for optimizing performance and user experience. By applying these principles, you can create faster, more efficient, and engaging applications.
              </dd>

             


        </dl>
    </div>
  )
}

export default Qna14
